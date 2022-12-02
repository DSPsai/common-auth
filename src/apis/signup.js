import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toaststyle } from "../Components/toastdata";
export const signup = async (details) => {
  const go = useNavigate();
  return await axios
    .post(`${process.env.REACT_APP_API_URL1}/auth/users/`, {
      first_name: details.fname,
      last_name: details.lname,
      company: details.company,
      email: details.email,
      password: details.password,
      phone: details.phone,
      insight: details.insight,
    })
    .then((response) => {
      console.log(response);
      div.style.display = "none";
      toast.success("Verification Mail Sent Successfully", {
        ...toaststyle,
        autoClose: 10000,
      });
    })
    .catch((err) => {
      console.log(err);
      div.style.display = "none";
      if (err.response.status == 500) {
        toast.error("Server busy Please try After sometime", toaststyle);
        return false;
      }
      toast.error("Error, Please check all fields", toaststyle);
    });
};
