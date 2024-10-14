import { Signature } from "./Signature";

export type SignatureFormData = {
  data: Signature;
  setters: {
    setName: (input: string) => void;
    setPosition: (input: string) => void;
    setEmail: (input: string) => void;
  };
};
