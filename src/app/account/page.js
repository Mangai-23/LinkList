import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AccountPage(){
    const session = await getServerSession(authOptions);
    return (
        <div className="p-4 max-w-xs mx-auto">
            <h1 className="text-xl font-bold text-center mb-2">
                Account {session?.user?.name}
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Your account page
            </p>
        </div>

    );
}