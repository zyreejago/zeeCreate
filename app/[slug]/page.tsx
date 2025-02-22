import { notFound } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  if (params.slug !== "halaman-yang-valid") {
    notFound(); // Akan mengarah ke `not-found.tsx`
  }

  return <h1>Halaman ditemukan!</h1>;
}
