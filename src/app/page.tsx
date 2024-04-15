import { db } from "../server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id}>
            <img src={image.url} className="w-48" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
