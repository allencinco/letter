import { notFound } from 'next/navigation';
import Letter from '../Letter';
import { letters } from '../letters';

export const dynamicParams = false;

export const generateStaticParams = () => letters.map(({ slug }) => ({ slug }));

export default async function Page({ params }) {
  const { slug } = await params;
  const letter = letters.find((l) => l.slug === slug);
  if (!letter) notFound();
  return <Letter letter={letter} />;
}
