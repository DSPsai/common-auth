import axios from "axios";
import { toast } from "react-toastify";
export async function axiosget(url) {
  let div = document.getElementsByClassName("loadmain")[0];
  div.style.display = "flex";
  return await axios
    .get(`${process.env.REACT_APP_API_URL1 + "/" + url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      div.style.display = "none";
      return response;
    })
    .catch((err) => {
      div.style.display = "none";
      console.log(err);
      if (err.response.status == 500) {
        toast.error("Server busy try after Sometime", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(JSON.stringify(err.response.data), {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
}
