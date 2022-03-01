import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CreateListDialog from "../../Dialogs/createListDialog";
import CreateFolderDialog from "../../Dialogs/CreateFolderDialog";

function SpaceOptionsDialog({ anchorEl, openMenu, closeMenu, id }) {
  const [showListDialog, setShowListDialog] = useState(false);
  const [showFolderDialog, setShowFolderDialog] = useState(false);

  const menuItemStyle = {
    padding: "8px",
    color: "#d5d6d7",
    fontSize: "13px",
  }

  const iconStyle = {
    marginRight: "5px",
    transform: "scale(0.8)",
  }

  return (
    <>
      <Menu
        sx={{
          "& .MuiMenu-paper": {
            background: "#384047",
            color: "#979797",
          },
          "& li": {
            fontSize: "13px",
          }
        }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={closeMenu}
      >
        <h5 style={{ fontWeight: "600", padding: "5px 20px", fontSize: "11px", color: "#dadada" }}>SPACE SETTINGS</h5>
        <MenuItem style={menuItemStyle} onClick={() => { setShowFolderDialog(true) }}><AddIcon style={iconStyle} />Add Folder</MenuItem>
        <MenuItem style={menuItemStyle} onClick={() => { setShowListDialog(true) }}><AddIcon style={iconStyle} />Add List</MenuItem>
        <MenuItem style={menuItemStyle}><EditIcon style={iconStyle} />Edit</MenuItem>
        <MenuItem style={menuItemStyle}><DeleteIcon style={iconStyle} />Delete</MenuItem>
      </Menu>

      <CreateFolderDialog
        open={showFolderDialog}
        closeDialog={() => { setShowFolderDialog(false); closeMenu() }}
        itemType="space"
        itemId={id}
      />
      <CreateListDialog open={showListDialog} closeDialog={() => { setShowListDialog(false); closeMenu() }} />
    </>
  )
}

export default SpaceOptionsDialog;
