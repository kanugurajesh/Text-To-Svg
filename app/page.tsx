import TextToSvgMain from '@/components/TextToSvgMain';

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Text to SVG Converter
        </h1>
        <TextToSvgMain />
      </div>
    </main>
  );
}