'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

// const formSchema = z;

export const StoreModal = () =>{
    const storeModal = useStoreModal();

    return(
        <Modal 
        title="Create Store" 
        description="Add a new store"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
            Create Store Form
        </Modal>
    );

}
  