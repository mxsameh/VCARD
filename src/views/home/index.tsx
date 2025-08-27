import s from "./_s.module.scss";

const Home = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className={s.p}>
      <button onClick={handleClick}>
        <a href="/rim.vcf">download</a>
      </button>
    </div>
  );
};

export default Home;
