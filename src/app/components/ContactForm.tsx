import { useState } from 'react';
import { IoIosSend } from "react-icons/io";

interface FormData {
    fullName: string;
    emailAddress: string;
    message: string;
  }
  
  const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      fullName: '',
      emailAddress: '',
      message: '',
    });

  const isFormValid = () => {
    return formData.fullName !== '' && formData.emailAddress !== '' && formData.message !== '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic 
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">
          Contact Form
        </h1>
        <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-1 lg:gap-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="input shadow-sm shadow-jet"
            required
          />
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="input shadow-sm shadow-jet"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          cols={20}
          rows={10}
          placeholder="Your Message"
          className="input shadow-sm shadow-jet"
          required
        />

        <div className="flex items-end justify-end mt-5">
          <button
            type="submit"
            className={`py-3 px-5 flex items-center gap-2 text-vegas-gold text-[15px] font-bold bg-smoky-black border border-jet border-solid shadow-sm shadow-vegas-gold rounded-xl button ${
              !isFormValid() && 'opacity-50 cursor-not-allowed shadow-sm shadow-jet button'
            }`}
            disabled={!isFormValid()}
          >
            <IoIosSend className="text-2xl"/> Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
