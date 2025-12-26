import React from 'react';

type BtnSolidProps = {
  type?: "primary" | "normal" | "ghost" | "secondary";
  state?: "hover" | "normal";
  children?: React.ReactNode;
};

export default function BtnSolid({
  type = "primary",
  state = "normal",
  children = "Button"
}: BtnSolidProps) {
  const isPrimary = type === "primary";
  const isSecondary = type === "secondary";
  const isNormal = type === "normal";
  const isGhost = type === "ghost";
  const isHover = state === "hover";

  // Background and border classes
  const getBackgroundClasses = () => {
    if (isPrimary) {
      return isHover
        ? "bg-[#12a67a]"
        : "bg-[#15bf8d] hover:bg-[#12a67a]";
    }
    if (isSecondary) {
      return isHover
        ? "bg-[#e7edf4] border border-[#15bf8d]"
        : "bg-white border border-[#15bf8d] hover:bg-[#e7edf4]";
    }
    if (isNormal) {
      return isHover
        ? "bg-[#e7edf4] border border-[#a7b9cc]"
        : "bg-white border border-[#a7b9cc] hover:bg-[#e7edf4]";
    }
    if (isGhost) {
      return isHover
        ? "bg-[#e7edf4]"
        : "bg-white hover:bg-[#e7edf4]";
    }
    return "";
  };

  // Text color classes
  const getTextClasses = () => {
    if (isPrimary) {
      return "text-white";
    }
    if (isSecondary) {
      return "text-[#15bf8d]";
    }
    return "text-[#2f353c]";
  };

  return (
    <button
      className={`
        flex items-center justify-center
        h-8 px-3 py-0
        rounded-md
        transition-colors
        ${getBackgroundClasses()}
      `}
    >
      <span className={`
        text-sm font-medium leading-[1.6]
        ${getTextClasses()}
      `}>
        {children}
      </span>
    </button>
  );
}
