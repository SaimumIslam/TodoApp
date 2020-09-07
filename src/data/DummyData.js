import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import WorkIcon from "@material-ui/icons/Work";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

export const TypeItems = ["Eat", "Code", "Sleep", "Work", "Excercise"];

export const IconType = {
  Eat: {
    icon: <FastfoodIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
  Code: {
    icon: <LaptopMacIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
  Sleep: {
    icon: <HotelIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
  Work: {
    icon: <WorkIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
  Excercise: {
    icon: <AccessibilityNewIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
  Repeat: {
    icon: <RepeatIcon color='primary' />,
    color: "primary",
    variant: "outlined",
  },
};
