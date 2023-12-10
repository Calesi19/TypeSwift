import React, { useState } from 'react';
import { Tooltip, Modal, Button } from 'flowbite-react';

function FooterBar() {
  const [openDeletingModal, setOpenDeletingModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  return (
    <div className="pl-10 pr-8 bg-[#F9FAFB] w-full text-slate-500 text-sm flex justify-between">
      <div className="py-1 line-clamp-1">
        Keystrokes saved: <span>0</span>
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
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className="mt-6 space-y-6">
            <h2 className='font-bold'>Privacy Policy</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className="mt-6 space-y-6">
            <h2 className='font-bold'>Privacy Policy</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default FooterBar;
