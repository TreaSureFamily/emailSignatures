import { useState } from "react";
import { SignatureFormData } from "../models/SignatureFormModel";

export default function useSignatureFormData(): SignatureFormData {
  const [name, setName] = useState("Nombre");
  const [position, setPosition] = useState("Posición");
  const [email, setEmail] = useState("@treasurefamilyapp.com");

  return {
    data: { name: name, position: position, email: email },
    setters: {
      setName: setName,
      setPosition: setPosition,
      setEmail: setEmail,
    },
  };
}
