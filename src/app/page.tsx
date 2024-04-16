import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "../server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <div>
            <Image
              src={image.url}
              alt={image.name}
              width={192}
              height={192}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
