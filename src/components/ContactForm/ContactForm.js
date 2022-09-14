import Button from "../Button/Button";
import "./contactForm.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";
import { useRef } from "react";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Must be a valid email"),
    phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    message: yup.string().required("Message is required")
});

export default function ContactForm() {
    const success_message = useRef(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = data => {
        emailjs.sendForm("service_rqpzq4b", "template_wzud1uf", "#form", "3AFuzM9g6Wt_pu6i0")
            .then(res => {
                success_message.current.className = "success-message open";
                setTimeout(() => {
                    success_message.current.className = "success-message";
                }, 1000);
            }, err => {
                console.log(err);
                alert("Error occured, couldn't submit form");
            })
        reset();
    }
    return (
        <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form__title">Tell us about your project</h2>
            <p className="form__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi
                vulputate potenti orci.
            </p>

            <div className="inputs-wrapper">
                <div className="success-message" ref={success_message}>Submitted Successfully</div>
                <div className="input-wrapper">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" {...register("name")} />
                    <span className="error-message">{ errors.name?.message }</span>
                </div>

                <div className="form__flex-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="email">Your Email</label>
                        <input type="text" name="email" id="email" {...register("email")} />
                        <span className="error-message">{ errors.email?.message }</span>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="phone_number">Your Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" {...register("phone_number")} />
                        <span className="error-message">{ errors.phone_number?.message }</span>
                    </div>
                </div>

                <div className="input-wrapper modifier">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="message" {...register("message")} ></textarea>
                    <span className="error-message">{ errors.message?.message }</span>
                </div>
            </div>

            <Button>Submit</Button>
        </form>
    );
}