import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const MyProfile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="min-h-[720px] ">
      <div className="flex flex-col justify-center items-center my-20">
        <h1>Welcome {user?.given_name}</h1>
        <img className="w-48 rounded-full object-cover border-2 my-4" src={user?.picture} alt="" />
      </div>
    </div>
  );
};

export default MyProfile;
