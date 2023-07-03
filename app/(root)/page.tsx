import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <div>
       
        <UserButton afterSignOutUrl="/"/>
        Hello Admin Dashboard
      </div>
    )
  }
  
export default SetupPage;