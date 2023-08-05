import User from "./userCard/user";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <ul>
        {data.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default page;
