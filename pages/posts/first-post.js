import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Link href="/">Also back to home</Link>
      </h2>
      <Image
        src="https://i.pinimg.com/564x/ee/97/52/ee9752e8ba0f5db92c8e18bb4c5701a4.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
