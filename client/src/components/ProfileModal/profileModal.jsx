import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "35%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({ modalOpened, setModalOpened }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setModalOpened(false);

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input
                type="text"
                className="infoInput"
                name="FirstName"
                placeholder="First Name"
              />

              <input
                type="text"
                className="infoInput"
                name="LastName"
                placeholder="Last Name"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input
                type="text"
                className="infoInput"
                name="worksAT"
                placeholder="Works at"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input
                type="text"
                className="infoInput"
                name="livesIN"
                placeholder="LIves in"
              />

              <input
                type="text"
                className="infoInput"
                name="Country"
                placeholder="Country"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input
                type="text"
                className="infoInput"
                placeholder="RelationShip Status"
              />
            </div>

            <div>
              Profile Image
              <input type="file" name="profileImg" />
              Cover Image
              <input type="file" name="coverImg" />
            </div>

            <button className="button infoButton">Update</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
