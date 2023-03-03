import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Link href="/">Also back to home</Link>
      </h2>
    </>
  );
}
