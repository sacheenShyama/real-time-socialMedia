import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../Action/uploadAction";
import { updateUser } from "../../Action/userAction";
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

export default function ProfileModal({ modalOpened, setModalOpened, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setModalOpened(false);

  const { password, ...other } = data;
  const [formData, setFormData] = React.useState(other);
  const [profileImage, setProfileImage] = React.useState(null);
  const [coverImage, setCoverImage] = React.useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profilePicture"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };
  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="infoFomr">
            <h4>Your Info</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <input
                  type="text"
                  className="infoInput"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />

                <input
                  type="text"
                  className="infoInput"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <input
                  type="text"
                  className="infoInput"
                  name="worksAt"
                  placeholder="Works at"
                  onChange={handleChange}
                  value={formData.worksAt}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <input
                  type="text"
                  className="infoInput"
                  name="livesin"
                  placeholder="LIves in"
                  onChange={handleChange}
                  value={formData.livesin}
                />

                <input
                  type="text"
                  className="infoInput"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  value={formData.country}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <input
                  type="text"
                  className="infoInput"
                  placeholder="RelationShip Status"
                  name="relationship"
                  onChange={handleChange}
                  value={formData.realtionship}
                />
              </div>

              <div>
                Profile Image
                <input
                  type="file"
                  name="profilePicture"
                  onChange={onImageChange}
                />
                Cover Image
                <input
                  type="file"
                  name="coverPicture"
                  onChange={onImageChange}
                />
              </div>

              <button className="button infoButton" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
