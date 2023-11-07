import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import PostShare from "../PostShare/PostShare";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  
};

export default function ShareModal({ modalOpened, setModalOpened }) {
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
          <div>
            <PostShare />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
