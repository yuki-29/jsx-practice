import { users } from "../data/data.js";

const Exercise1 = () => {
  const userItems = users.map((user) => (
    <li key={user.id}>
      {user.name}
      {user.age >= 18 && "（成人）"}
    </li>
  ));

  return <ul>{userItems}</ul>;
};

export default Exercise1;
