import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== "halaman-yang-valid") {
    notFound();
  }

  return <h1>Halaman ditemukan!</h1>;
}