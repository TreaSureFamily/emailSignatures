'use client'
import SignatureComponent from "./components/Signature/SignatureComponent";
import "./globals.css";
import useSignatureFormData from "./hooks/useSignatureFormData";
import SignatureFormComponent from "./components/Signature/SignatureFormComponent";

export default function Home() {
  const signatureFormData = useSignatureFormData();

  return (
    <div className="p-4 w-[500px]">
      <p> Introduce los datos para completar la firma</p>
      <SignatureFormComponent data={signatureFormData.data} setters={signatureFormData.setters} />
      <SignatureComponent
        name={signatureFormData.data.name}
        position={signatureFormData.data.position}
        email={signatureFormData.data.email}
      />
    </div>
  );
}
