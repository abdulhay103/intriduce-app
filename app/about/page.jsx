async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const page = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((user, i) => {
        <h1 key={i}>Hello</h1>;
      })}
    </div>
  );
};

export default page;
