
import swal from "sweetalert";

function FailedModal() {

  const redirect = () => {
      window.location.href = "/contact";
  }

  return (
    <>
     {swal({
        title: "Error" ,
        text: "Something went wrong :/ \n Send us your E-Mail directly to: info@sales-detective.live",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Try again",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        }}).then(redirect)
        }, []);
    </>
  );
}

export default FailedModal;








