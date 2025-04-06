import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";


const UserMenu = () => {
  return (
    <>
      <MenuItem label="Dashboard" address="admin-dashboard" icon={FaUser} />
      
    </>
  );
};

export default UserMenu;
