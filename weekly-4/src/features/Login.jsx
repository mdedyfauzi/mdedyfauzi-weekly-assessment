import TextBox from '../components/TextBox';
import TextButton from '../components/TextButton';
import './login.css';

const Login = () => {
  const buttontext = 'Sign me up';
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="textContent">
            <div className="text-wrapper">
              <h1>GOT MARKETING? ADVANCE YOUR BUSINESS INSIGHT.</h1>
              <p>Fill out the form and receive our award winning newsletter.</p>
            </div>
          </div>
          <div className="inputContent">
            <div className="item-wrapper">
              <div className="wrapper">
                <div className="item">
                  <div className="wrap">
                    <p>Name</p>
                    <TextBox />
                  </div>
                  <div>
                    <p>Email</p>
                    <TextBox />
                  </div>
                </div>
                <TextButton txtButton={buttontext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
