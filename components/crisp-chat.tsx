"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a20c6ac6-068c-4ccd-a0bb-96a119b16138");
  }, []);

  return null;
};