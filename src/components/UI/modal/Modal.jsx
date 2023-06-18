import React from "react";
import styled from "styled-components";
// import { createPortal } from "react-dom";
import { Box, Modal } from "@mui/material";

// const Backdrop = ({ onClose }) => {
//   return <StyledBackdrop onClick={onClose} />;
// };

// const ModalContent = ({ children }) => {
//   return <ModalStyle>{children}</ModalStyle>;
// };

// const backdrop = document.getElementById("backdrop");
// const modalContent = document.getElementById("modal");

export const Modalmui = ({ children, onClick }) => {
  return (
    <>
      {/* {createPortal(<Backdrop onClose={onClick} />, backdrop)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalContent)} */}
      <StyledBackdrop open={onClick} onClose={onClick}>
        <ModalStyle>{children}</ModalStyle>
      </StyledBackdrop>
    </>
  );
};

const ModalStyle = styled(Box)`
  position: fixed;
  top: 22vh;
  left: 4%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 0.3s ease-out forwards;
  width: 42rem;
  left: calc(50% - 20rem);

  z-index: 100;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledBackdrop = styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.75);

  backdrop-filter: blur(2px);

  z-index: 99;
`;
