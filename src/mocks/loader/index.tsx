import { useEffect, useState, type ReactNode } from "react";
import { setupWorker } from "msw/browser";
import { handlers } from "../handlers";

interface MswLoaderProps {
  children?: ReactNode;
}

export default function MswLoader({ children }: MswLoaderProps) {
  const [isLoadingWorker, setIsLoadingWorker] = useState(true);
  const worker = setupWorker(...handlers);

  useEffect(() => {
    worker.start().then(() => setIsLoadingWorker(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoadingWorker) {
    return <div>Preparing Service Worker...</div>;
  }

  return <>{children}</>;
}
