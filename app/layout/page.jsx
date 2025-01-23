import Navbar from "../components/page";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const MainLayout = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();


  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default MainLayout;
