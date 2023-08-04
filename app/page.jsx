async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Hello Next</h1>
    </div>
  );
};

export default page;
