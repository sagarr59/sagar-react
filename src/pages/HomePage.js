const HomePage = () => {

  // asynchronous function --3states--pending--fulfilled--rejected
  setTimeout(() => {
    console.log("Hello 1");
  }, 2000);
  console.log("Hello 2");
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
export default HomePage;
