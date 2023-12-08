import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text='About' icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        Welcome to Moon Artistics,<br/>A virtual creative hub where your brand's visual story comes to life. We specialize in crafting eye-catching logos, banners, thumbnails, and overlays, infusing creativity into every pixel. Our dedicated marketing team ensures your brand gets the spotlight it deserves on platforms like Twitch, Facebook, and YouTube. Now, extending our expertise, we're excited to offer website-making services, taking your online presence to new heights. Join us in this creative journey, where marketing seamlessly meets design, and let Moon Artistics elevate your brand's visual and digital identity.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
