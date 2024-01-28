import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NoteForm } from "components/NoteForm/NoteForm";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/note/note-slice";
import { updateNote } from "store/note/note-slice";

export const Note = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );

  const navigate = useNavigate();

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({ ...formValues, id: noteId });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  function deleteNote_(note) {
    if (window.confirm("Supprimer la note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => deleteNote_(note)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
};
