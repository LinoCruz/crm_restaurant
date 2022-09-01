import React, { useState, useEffect } from "react";
import { useUser } from "../../hooks";
import {
  HeaderPage,
  TableUsers,
  AddEditUserForm,
} from "../../components/Admin";
import { Loader } from "semantic-ui-react";
import { ModalBasic } from "../../components/Common";
export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => getUsers(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo usuario");
    setContentModal(
      <AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar usuario");
    setContentModal(
      <AddEditUserForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        user={data}
      />
    );
    openCloseModal();
  };

  return (
    <>
      <HeaderPage title="Usuarios" btnTitle="Nuevo usuario" />
      {loading ? (
        <Loader active inline="centered">
          Loading...
        </Loader>
      ) : (
        <TableUsers
          users={users}
          updateUser={updateUser}
          // onDeleteUser={onDeleteUser}
        />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
