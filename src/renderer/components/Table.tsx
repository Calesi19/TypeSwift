import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Modal,
  Tooltip,
  Label,
  TextInput,
  Textarea,
} from 'flowbite-react';
import { Container } from 'react-floating-action-button';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



function ShortcutTable() {
  // Initial shortcuts state
  const [shortcuts, setShortcuts] = useState([
    // ... (your initial shortcuts)
    {
      id: 'acmgreen',
      shortcut: 'acmgreen',
      phrase: 'Verified that ACM light is green on the TMC.',
    },
    {
      id: 'camfine',
      shortcut: 'camfine',
      phrase: 'Verified cameras are working properly.',
    },
    {
      id: 'shoulderl',
      shortcut: 'shoulderl',
      phrase:
        'Verified that lane is a shoulder lane. Shoulder lanes do not have normal traffic.',
    },
  ]);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [currentShortcut, setCurrentShortcut] = useState({});

  const handleEdit = (shortcut: any) => {
    setCurrentShortcut(shortcut);
    setOpenEditModal(true);
  };

  const handleDelete = (shortcut: any) => {
    setCurrentShortcut(shortcut);
    setOpenDeleteModal(true);
  };

  const deleteShortcut = () => {
    setShortcuts(shortcuts.filter((s) => s.id !== currentShortcut.id));
    setOpenDeleteModal(false);
  };

  const saveChanges = (updatedShortcut: any) => {
    setShortcuts(
      shortcuts.map((s) => (s.id === updatedShortcut.id ? updatedShortcut : s)),
    );
    setOpenEditModal(false);
  };

  const addShortcut = (newShortcut: any) => {
    setShortcuts([...shortcuts, newShortcut]);
    setOpenCreateModal(false);
  };

  // Update the Shortcut in the Modal
const handleShortcutChange = (e) => {
  setCurrentShortcut({ ...currentShortcut, shortcut: e.target.value });
};

// Update the Phrase in the Modal
const handlePhraseChange = (e) => {
  setCurrentShortcut({ ...currentShortcut, phrase: e.target.value });
};

  return (
    <div className="overflow-x-auto bg-white flex flex-col justify-between">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Shortcut</Table.HeadCell>
          <Table.HeadCell>Phrase</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {shortcuts.map((shortcut) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <div className="flex p-1 h-[64px]">
                  <Button
                    color="primary"
                    className="hover:bg-red-200"
                    onClick={() => handleDelete(shortcut)}
                  >
                    <MdDelete size={20} />
                  </Button>
                  <Button
                    color="primary"
                    className="hover:bg-blue-200"
                    onClick={() => handleEdit(shortcut)}
                  >
                    <FaEdit size={18} />
                  </Button>
                </div>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {shortcut.shortcut}
              </Table.Cell>
              <Table.Cell>
                <div className="line-clamp-2" style={{ lineClamp: 2 }}>
                  {shortcut.phrase}
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Container>
          <Tooltip content="Add Shortcut" placement="left">
            <Button onClick={() => setOpenCreateModal(true)}>
              <FaPlus />
            </Button>
          </Tooltip>
        </Container>
      </Table>

      {/* Create Modal */}
      <Modal show={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <Modal.Header>Add Shortcut</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Shortcut" />
              </div>
              <TextInput id="new_shortcut" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Phrase" />
              </div>
              <Textarea id="new_phrase" required rows={4} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-full"
            onClick={() =>
              addShortcut({
                id: 'hello',
                shortcut: 'hello',
                phrase: 'My name is Jeff.',
              })
            }
          >
            Add Shortcut
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Delete Modal */}
      <Modal show={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <Modal.Header>Delete Shortcut</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            Are you sure you want to delete this shortcut? This action cannot be
            undone.
          </div>

          <TextInput
            type="text"
            value={currentShortcut ? currentShortcut.shortcut : ''}
            disabled
            className="mt-5 font-semibold"
            onChange={(e) =>
              setCurrentShortcut({
                ...currentShortcut,
                shortcut: e.target.value,
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="failure"
            className="w-full"
            onClick={() => setOpenDeleteModal(false)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Modal.Header>Edit Shortcut</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label value="Shortcut" />
              </div>
              <TextInput
                value={currentShortcut ? currentShortcut.shortcut : ''}
                onChange={handleShortcutChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Phrase" />
              </div>
              <Textarea
                value={currentShortcut ? currentShortcut.phrase : ''}
                required
                rows={4}
                onChange={handlePhraseChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-full"
            onClick={() =>
              saveChanges({
                id: currentShortcut.id,
                shortcut: 'hello',
                phrase: 'My name is Jeff.',
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShortcutTable;
