import { useRef, useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbLoader3 } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import HCaptcha from '@hcaptcha/react-hcaptcha';

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
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null); // Initialize token as null
  const captchaRef = useRef<HCaptcha | null>(null); // Initialize captchaRef as null

  const isFormValid = () => {
    return (
      formData.fullName !== '' &&
      formData.emailAddress !== '' &&
      formData.message !== '' &&
      token !== null
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      emailAddress: '',
      message: '',
    });
    if (captchaRef.current) {
      captchaRef.current.resetCaptcha(); // Reset the captcha
    }
    setToken(null); // Clear the token by setting it to null
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const formDatas = new FormData();
    formDatas.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || '');
    formDatas.append("fullName", formData.fullName);
    formDatas.append("emailAddress", formData.emailAddress);
    formDatas.append("message", formData.message);
    // formDatas.append("hCaptchaToken", token || '');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDatas,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          progressStyle: { background: '#FFC254' },
          style: { color: '#121212' },
          icon: <GrStatusGood className="text-xl" />,
        });
        clearForm();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
    }

    setIsLoading(false);
  };


  //hCaptcha code blocks
  const onLoad = () => {
    if (captchaRef.current) {
      captchaRef.current.execute(); // Execute hCaptcha when the component loads
    }
  };

  useEffect(() => {
    if (token) {
      console.log(`hCaptcha Token: ${token}`);
    }
  }, [token]);

  
  return (
    <section className="flex flex-col gap-5">
      <ToastContainer />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">
          Contact Form
        </h1>
        <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
      </div>

      <form onSubmit={handleSubmit} className='text-[14px] md:text-[16px]'>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="input shadow-sm shadow-jet"
            required
            data-aos="fade-down"
          />
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="input shadow-sm shadow-jet"
            required
            data-aos="fade-down"
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
          data-aos="fade-down"
        />

        <div className="flex items-end justify-end" data-aos="fade-up">
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            onLoad={onLoad}
            reCaptchaCompat={false}
            onVerify={setToken}
            ref={captchaRef}
            theme="dark"
            size="normal"
            data-theme-dark="{'background':'#000000','accent':'#FFC300'}"
            data-theme-light="{'background':'#FFFFFF','accent':'#FF5722'}"
            data-captcha-idle-timeout="60"
          />
        </div>

        <div className="flex items-end justify-end mt-5" data-aos="fade-up">
          <button
            type="submit"
            className={`py-3 px-5 flex items-center gap-2 text-vegas-gold text-[15px] font-bold bg-smoky-black border border-jet border-solid shadow-sm shadow-vegas-gold rounded-xl button ${!isFormValid() && 'opacity-50 cursor-not-allowed shadow-sm shadow-jet button'
              }`}
            disabled={!isFormValid()}
          >
            {isLoading ? <TbLoader3 className="animate-spin text-2xl" /> : <IoIosSend className="text-2xl" />}
            {"Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;