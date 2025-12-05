import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        alt="logo"
        src={"/images/logo-2.png"}
        width={180}
        height={20}
      ></Image>
    </div>
  );
};
