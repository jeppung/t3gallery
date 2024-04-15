const mockUrls = [
  "https://utfs.io/f/712b10e6-88a5-463a-b0cd-357e1aaf2804-hg4weo.png",
  "https://utfs.io/f/3abd2a70-82e8-44cf-b1a6-58b422b593fd-hcfzne.png",
  "https://utfs.io/f/0f500e8e-7dbd-49fc-a269-6a4d87b336f0-nuzqiy.jpeg",
  "https://utfs.io/f/f6b530a2-92e9-4df9-ae47-ca0a917ab48c-pnx0de.jpg",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id}>
            <img src={image.url} className="w-48" />
          </div>
        ))}
      </div>
    </main>
  );
}
