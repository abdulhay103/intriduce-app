async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h1>From about page</h1>
    </div>
  );
};

export default page;
