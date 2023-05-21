import React from 'react';
import './Sidebar.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="#documents" className="sidebar__link">
            <InsertDriveFileIcon className="sidebar__icon" />
            Documents
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#shared" className="sidebar__link">
            <FolderSharedIcon className="sidebar__icon" />
            Shared with me
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#starred" className="sidebar__link">
            <StarIcon className="sidebar__icon" />
            Starred
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#recent" className="sidebar__link">
            <AccessTimeIcon className="sidebar__icon" />
            Recent
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#trash" className="sidebar__link">
            <DeleteIcon className="sidebar__icon" />
            Trash
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;