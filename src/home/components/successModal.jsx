
import swal from 'sweetalert';

function SuccessModal() {

  const redirect = () => {
      window.location.href = "/";
  }

  return (
    <>
      {swal({
        title: "Success" ,
        text: "Message send!",
        icon: "success",
        button: {
          text: "Nach Hause",
          value: true,
          visible: true,
          className: "modalButtonSuccess",
          closeModal: true,
        }}).then(redirect)
        }, []);
    </>
  );
}

export default SuccessModal;