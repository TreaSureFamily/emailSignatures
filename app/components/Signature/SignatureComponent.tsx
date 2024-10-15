import Image from "next/image";
import { SignatureFormData } from "../../models/SignatureFormModel";
import { Signature } from "@/app/models/Signature";

export default function SignatureComponent(data: Signature) {
  return (
    <div className="flex">
      <table className="text-left">
        <tbody>
          <tr>
            <td className="w-full h-[130px] align-middle">
              <Image
                src="https://treasurefamilyapp.com/wp-content/uploads/2023/06/favicon.png"
                alt="tsfa-icon"
                width={80}
                height={70}
                className="object-cover"
              />
            </td>

            <td className="pl-4">
              <p className="text-lg text-[#799D6D] font-bold">
                {data.name ? data.name : "Nombre"}
              </p>
              <p className="mb-2 text-[#799D6D]">
                {data.position ? data.position : "Posición"}
              </p>

              <a
                href="mailto:mcorrea@treasurefamilyapp.com"
                className="flex items-center space-x-2"
              >
                <Image
                  src="https://github.com/TreaSureFamily/emailSignatures/blob/main/assets/email.png?raw=true"
                  alt="email-icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <p className="font-medium  text-blue-500">{data.email}</p>
              </a>

              <a
                href="https://www.treasurefamilyapp.com"
                className="flex items-center space-x-2"
              >
                <Image
                  src="https://github.com/TreaSureFamily/emailSignatures/blob/main/assets/web.png?raw=true"
                  alt="web-icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <p className="font-medium text-blue-500">
                  treasurefamilyapp.com
                </p>
              </a>

              <a
                href="https://www.instagram.com/treasurefamilyapp/"
                className="flex items-center space-x-2"
              >
                <Image
                  src="https://github.com/TreaSureFamily/emailSignatures/blob/main/assets/insta.png?raw=true"
                  alt="instagram-icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <p className="font-medium text-[#D8583F]">@treasurefamilyapp</p>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
