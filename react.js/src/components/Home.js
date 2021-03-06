import home_img from "../assets/home_img.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="quote">
        <h1>Generate surveys and online forms in <span style={{color: "rgba(242, 53, 53, 1)"}}>Minutes</span> </h1>
        <p>Sign up now for unlimited surveys and questions.</p>
        <button onClick={()=> navigate('/surveys')} id="home-button">Get Started</button>
      </div>
      <div>
        <img src={home_img} alt="" />
      </div>
    </div>
  );
};

export default Home;
