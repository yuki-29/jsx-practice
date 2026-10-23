import { devices } from "../data/data.js";

const Exercise2 = () => {
  const wideDevices = devices.filter((device) => device.width >= 700);
  const deviceItems = wideDevices.map((device) => (
    <li key={device.id}>
      {device.name}
      {device.price >= 1000 ? " 💰 高級品" : " 🛒 お買い得"}
    </li>
  ));

  return <ul>{deviceItems}</ul>;
};

export default Exercise2;
