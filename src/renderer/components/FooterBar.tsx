import React, { useState } from 'react';
import { Tooltip, Modal, Button } from 'flowbite-react';

function FooterBar() {
  const [openDeletingModal, setOpenDeletingModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 pl-10 pr-8 bg-[#F9FAFB] w-full text-slate-500 text-sm flex justify-between">
      <div className="py-1 line-clamp-1">
        Keystrokes saved: <span>14,324</span>
      </div>

      <div className="flex">
        <div className="hover:bg-slate-200 h-full flex">
          <Tooltip content="Delete All" placement="top">
            <button onClick={() => setOpenDeletingModal(true)} className="h-full px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path
                  opacity="1"
                  fill="#64758B"
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </button>
          </Tooltip>
        </div>
        <div className="hover:bg-slate-200 h-full flex">
          <Tooltip content="Info" placement="top">
            <button onClick={() => setOpenInfoModal(true)} className="h-full px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  opacity="1"
                  fill="#64758B"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </button>
          </Tooltip>
        </div>
      </div>

      <Modal show={openDeletingModal} onClose={() => setOpenDeletingModal(false)}>
        <Modal.Header>Delete Shortcuts</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure you want to delete all shortcuts? This action cannot be undone.
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setOpenDeletingModal(false)}>
            Delete All Shortcuts
          </Button>
          <Button color="gray" onClick={() => setOpenDeletingModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Info Modal */}
      <Modal show={openInfoModal} onClose={() => setOpenInfoModal(false)}>
        <Modal.Header>Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <h2 className='font-bold'>Terms of Services</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The TypeSwift Terms of Service recommend users not to store any sensitive personal information within the app due to potential security risks. Additionally, as an open-source application, TypeSwift encourages users to contribute to its development and improvement, inviting community collaboration and enhancement of the app's features and functionality. Users are welcomed to modify and refine the app in alignment with their needs and expertise.
            </p>
            
          </div>
         
          <div className="mt-6 space-y-6">
            <h2 className='font-bold'>Privacy Policy</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            TypeSwift does not store or upload any of your keystrokes or personal information. The app tracks the keystrokes for only for the current word being typed to enable the text extension functionality but does not record, store, or transmit this data externally.
            </p>
            
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default FooterBar;
