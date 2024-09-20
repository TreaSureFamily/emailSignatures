import Image from "next/image";
import ContactItem from "./components/ContactItem";

export default function Home() {
  const barquito = "/assets/Barquito.png";
  const emailIcon = "/assets/Email_Icon.png";
  const instagramIcon = "/assets/Instagram_Icon.png";
  const webIcon = "/assets/Web_Icon.png";

  return (
    <table className={"border-none w-auto"}>
      <tbody>
        <tr>
          <td
            style={{
              borderRightWidth: 2,
              borderRightStyle: "solid",
              borderRightColor: "#D6573E",
              width: "170px",
              height: "190px",
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            {/* #not_centered */}
            <div className="flex h-fit w-full justify-center">
              <div className="relative w-32 h-32">
                <Image src={barquito} alt="tsfa-icon" fill />
              </div>
            </div>
          </td>

          <td className="h-10">
            <div className="ml-5">
              <p className="font-bold text-[20px] text-[#799D6D]">
                Miguel Correa Avila
              </p>
              <p className="text-[#799D6D] mb-3">Fullstack Developer</p>


              <ContactItem
                title={"mcorrea@treasurefamilyapp.com"}
                href={"mailto:mcorrea@treasurefamilyapp.com"}
                color={"#007BB5"}
                alt={"emailIcon"}
                imageSource={emailIcon}
              />

              <ContactItem
                title={"treasurefamilyapp.com"}
                href={"https://www.treasurefamilyapp.com"}
                color={"#007BB5"}
                alt={"webIcon"}
                imageSource={webIcon}
              />

              <ContactItem
                title={"@treasurefamilyapp"}
                href={"https://www.treasurefamilyapp.com"}
                color={"#D6573E"}
                alt={"instagramIcon"}
                imageSource={instagramIcon}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
