import './textButton.css';

const TextButton = ({ txtButton }) => {
  return (
    <>
      <form>
        <button className="btn">{txtButton}</button>
      </form>
    </>
  );
};

export default TextButton;
