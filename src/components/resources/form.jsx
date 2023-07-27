import { useState } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbPhone } from "react-icons/tb";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("anonymous");
  const [message, setMessage] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const [error, setError] = useState(true);

  const validEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (validEmail && message === "") setError(true);
    else setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (!error) {
      setEmail("");
      setName("anonymous");
      setMessage("");
      setError(true);
      alert("Message Sent");
    } else alert("Invalid Email or Empty Message");
  };

  const form = () => {
    const isError = !validEmail(email);
    return (
      <div className="w-96 flex justify-center items-center mx-auto border-2 border-heather rounded-md m-6 p-6">
        <FormControl isInvalid={isError}>
          <FormLabel className="">Email</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
          {!isError ? (
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

          <FormLabel className="pt-4">Name</FormLabel>
          <Input type="text" value={name} onChange={handleNameChange} />
          <FormHelperText>
            {name === "anonymous" || name === "" ? (
              <>Your name will be saved as anonymous.</>
            ) : (
              <></>
            )}
          </FormHelperText>

          <FormLabel className="pt-4">Message</FormLabel>
          <Textarea
            resize="vertical"
            overflowY="auto"
            wrap="soft"
            value={message}
            onChange={handleMessageChange}
          />
          <FormHelperText>Leave your message.</FormHelperText>
          <button
            type="submit"
            className="font-serif border-2 rounded-xl border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste py-2 px-5 mt-6"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </FormControl>
      </div>
    );
  };

  return (
    <div className="bg-celeste p-6" id="contact">
      <div className="text-deep-forest-green text-3xl font-bold text-center font-serif">
        Reach Out to Us
      </div>
      <div className="py-6 md:text-xl text-md text-center">
        Reach out to us for a caring ear and expert guidance. Your well-being is
        our priority.
      </div>
      <div className="py-4 md:text-xl text-md text-center">
        <p className="">
          <span className="inline-block align-middle">
            <RxEnvelopeClosed />
          </span>
          <span className="p-1">Email:</span>
          <a href="mailto:info@a.com" className="hover:text-gray-500">
            wongyimingvictor@sd.taylors.edu.com
          </a>
        </p>
        <p className="my-2">
          <span className="inline-block align-middle">
            <TbPhone />
          </span>
          <span className="p-1">Phone:</span>
          <a href="tel:60376272929" className="hover:text-gray-500">
            +603 7627 2929
          </a>
        </p>
      </div>
      {form()}
    </div>
  );
};

export default Form;
