import React, {useEffect} from 'react'
import axios from "axios";
import ReactLoading from 'react-loading';
import {Envelope} from "react-bootstrap-icons";
import SuccessModal from "./successModal.jsx";

const ContactForm = () => {

  const [submit, setSubmit] = React.useState(false);
  const [seconds, setSeconds] = React.useState(2.2);
  const [status, setStatus] = React.useState(null);

  const [form, setForm] = React.useState( {
      option: 'choose option',
      successUrl: null
  })

  const countdown = { // create a new dict
  start: function() {  // with a start-function
    const interval = setInterval(() => {  // set intervall of 1000ms
      setSeconds(prevSeconds => {  // say. new value for seconds = prevSeconds = ...
        if (prevSeconds <= 1) {
          clearInterval(interval);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
  }
}

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const { first_name, last_name, option, email, message } = e.target.elements
    let conFom = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      option: option.value,
      message: message.value,
    }

    console.log("data:" + conFom)

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/contact/", conFom);
      console.log("response:" + response);
      const successUrl = response.data.successUrl;
      setForm({...form, successUrl: successUrl});
      setStatus(response.data.status);
    } catch (error) {
      console.log(error);
      }
    };

  useEffect(() => {
  if (submit) {
    countdown.start();
    }
  }, [submit, status]);

  const handleChange = (event) => {
      setForm({ ...form, option: event.target.value });
  };

  console.log("status:" + status)
  console.log("submit:" + submit)
  console.log("sec:" + seconds)
  return (
    <div className="container mt-5">
        {submit ? (
            seconds > 0 ? (
                <div className="container mt-5">
                  <ReactLoading type={"spin"} color={"rgb(0, 0, 255"} height={150} width={150} />
                </div>
            ) : (
                status === 201 ? (
                    <div className="container mt-5">
                        <SuccessModal />
                    </div>
                ) : (
                    <p>
                        Something went wrong. Please try again...
                    </p>
                )
            )
      ) : (
        <div className="container mt-5">
        <h2 className="mb-3">Contact</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="first_name">
                First Name
              </label>
              <input className="form-control" type="text" id="first_name" required />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="last_name">
                Last Name
              </label>
              <input className="form-control" type="text" id="last_name" required />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="options">
                What’s your concern?
              </label>
              <select value={form.option} id={"option"} className="form-control" onChange={handleChange}>
                  <option value="security">Security</option>
                  <option value="problem">Problem</option>
                  <option value="questions">Questions</option>
                  <option value="praise/criticism">Praise/Criticism</option>
                  <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <div className="mb-3" style={{flexDirection: "row", display: "flex", alignItems: "center"}}>
              <button className="btn btn-danger" style={{display: "flex", justifyContent: "center", alignItems: "center"}} type="submit">
                Send
                <Envelope style={{margin: "auto 5px"}}/>
              </button>
              <div className={"alternative_mail_container"}>
              <p>
                Problems with Contact form? Send us directly a E-Mail:
                <span style={{color: "rgb(255, 0, 0)"}}>info@sales-detective.info</span>
              </p>
                </div>
            </div>
          </form>
        </div>
      )};
    </div>
  );
}
export default ContactForm;