"use client";
import { useEffect, useState } from "react";
import { SignatureFormData } from "../../models/SignatureFormModel";

export default function SignatureFormComponent({
  data,
  setters,
}: SignatureFormData) {
  function clear() {
    setters.setEmail("@treasurefamilyapp.com");
    setters.setName("");
    setters.setPosition("");
  }

  return (
    <div className="flex flex-col gap-2 mb-10 w-full">
      <div className="bg-gray-200 p-1">
        <input
          className="text-black p-1 px-2 w-[100%]"
          value={data.name}
          placeholder="Nombre"
          onChange={(e) => setters.setName(e.target.value)}
        />
      </div>
      <div className="bg-gray-200 p-1">
        <input
          className="text-black p-1 px-2  w-[100%]"
          value={data.position}
          placeholder="Posición"
          onChange={(e) => setters.setPosition(e.target.value)}
        />
      </div>

      <div className="bg-gray-200 p-1">
        <input
          className="text-black p-1 px-2  w-[100%]"
          value={data.email}
          placeholder="Email"
          onChange={(e) => setters.setEmail(e.target.value)}
        />
      </div>

      <button
        value={"Clear"}
        onClick={clear}
        className="bg-purple-400 h-[50px] rounded-lg active:bg-purple-300 hover:bg-red-400"
      >
        <p className="text-black font-bold">Clear</p>
      </button>
    </div>
  );
}
