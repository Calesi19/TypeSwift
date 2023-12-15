import React, { useState, useEffect } from 'react';
import { Table, Button, } from 'flowbite-react';


function ShortcutTable() {
  const shortcuts = [
    {
      id: "acmgreen",
      shortcut: "acmgreen",
      phrase: "Verified that ACM light is green on the TMC."
    },
    {
      id: "camfine",
      shortcut: "camfine",
      phrase: "Verified cameras are working properly."
    },
    {
      id: "shoulderl",
      shortcut: "shoulderl",
      phrase: "Verified that lane is a shoulder lane. Shoulder lanes do not have normal traffic."
    },
    
  ];
  
  

  return (
    <div className="overflow-x-auto bg-white flex flex-col justify-between">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Shortcut</Table.HeadCell>
          <Table.HeadCell>Phrase</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          

          {
            shortcuts.map((shortcut) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
            <div className='flex p-1 h-[64px]'>
            <Button color="primary" className='hover:bg-red-200'>
                <svg
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    opacity="1"
                    fill="#1E3050"
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </Button>
              <Button color="primary" className='hover:bg-blue-200'>
                <svg
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    opacity="1"
                    fill="#1E3050"
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                  />
                </svg>{' '}
              </Button>
              </ div>
              </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {shortcut.shortcut}
            </Table.Cell>
            <Table.Cell >
              <div className="line-clamp-2" style={{ lineClamp: 2 }}>
              {shortcut.phrase}
              </div>
              </Table.Cell>
          </Table.Row>
            ))
          }


          
        </Table.Body>
      </Table>
    </div>
  );
}

export default ShortcutTable;
