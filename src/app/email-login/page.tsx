"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function EmailLogin() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [link, setLink] = useState<string>("exp://");

  useEffect(() => {
    const loginLink = searchParams.get("login_link");
    if (loginLink) {
      const decodedLink = decodeURIComponent(loginLink);
      setLink(decodedLink);

      window.location.href = decodedLink;
    } else {
      // If user which came in this site not have parameters then redirect to main page.
      router.push("/");
    }
  }, [searchParams]);
  return (
    <div className="flex-1 flex-col justify-between max-h-[480px] px-16 py-8 flex">
      <header>
        <h1 className="text-6xl font-ChillaxSemibold">Matsi</h1>
      </header>
      <footer className="gap-5 items-center flex flex-col">
        <p className="font-GeneralSansMedium">
          Eikö Matsi-sovellus avautunut, paina alla olevaa painiketta avataksesi
          se.
        </p>
        <a
          href={link}
          className="font-ChillaxMedium bg-white text-black py-4 px-4 rounded-full"
        >
          Avaa Matsi-sovellus
        </a>
      </footer>
    </div>
  );
}
