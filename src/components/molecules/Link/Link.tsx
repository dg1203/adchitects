import React from "react";
import { NavLink } from "components/atoms/NavLink";

interface IProps {
  url: string;
  label: string;
  isActive: boolean;
}

const Link: React.FC<IProps> = ({ url, label, isActive }) => (
  <NavLink className={isActive ? "active" : ""} to={url}>{label}</NavLink>
);

export default Link;
