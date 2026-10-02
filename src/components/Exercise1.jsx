import { users } from "../data/data.js";

const userItems = users.map((user) => (
  <li key={user.id}>
    {user.name}
    {user.age >= 18 && "（成人）"}
  </li>
));

const Exercise1 = () => {
  return <ul>{userItems}</ul>;
};

export default Exercise1;
