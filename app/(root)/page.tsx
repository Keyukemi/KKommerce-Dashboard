'use client'
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <div>
        <UserButton afterSignOutUrl="/"/>
        <Modal isOpen onClose={()=>{}} title="Test" description="Testing 123">
            children
        </Modal>
        
      </div>
    )
  }
  
export default SetupPage;