import { FaUser } from "react-icons/fa6";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
  return (
    <>
      <MenuItem label="Dashboard" address="admin-dashboard" icon={FaUser} />
      
    </>
  );
};

export default AdminMenu;
