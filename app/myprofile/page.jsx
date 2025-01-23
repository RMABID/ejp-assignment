import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const MyProfile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user.picture);
  return (
    <div>
      <div>
        <h1>Welcome {user?.given_name}</h1>
        <img src={user?.picture} alt="" />
      </div>
    </div>
  );
};

export default MyProfile;
