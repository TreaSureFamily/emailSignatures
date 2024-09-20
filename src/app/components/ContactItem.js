import Image from "next/image";

export default function ContactItem({ title, href, imageSource, alt, color }) {
  return (
    <div className="flex mb-2 h-[20px] content-center">
      <div className="relative h-[22px] w-[22px] mt-1 mr-2">
        <Image src={imageSource} alt={alt} fill />
      </div>

      <div className=" h-[30px] content-center">
        <a href={href}>
          <p style={{ color: color }} className="font-semibold">{title}</p>
        </a>
      </div>
    </div>
  );
}
