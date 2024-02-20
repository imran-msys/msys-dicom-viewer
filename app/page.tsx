import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="flex justify-center mt-10">
      <div className="max-w-lg bg-card border text-card-foreground rounded-3xl flex flex-col items-center justify-center py-6 drop-shadow-sm">
        <div className="flex justify-center gap-4 border-b border-muted pb-3 px-9">
          <UploadCloud size="42" className="border rounded-full p-2" />
          <div>
            <h2 className="text-xl font-medium">Upload DCM</h2>
            <p className="text-muted-foreground text-base">
              Select and upload the Image of your choice
            </p>
          </div>
        </div>

        <div className="border-4 border-dashed border-muted rounded-3xl my-6 py-8 px-9">
          <div className="flex flex-col gap-4 items-center justify-center">
            <UploadCloud size="32" className="text-card-foreground opacity-90" />
            <span className="text-center">
              <p className="text-card-foreground text-lg">
                Choose a file or drag & drop it here
              </p>
              <p className="text-base text-muted-foreground">DCM</p>
            </span>
            <Button
              size="lg"
              variant="default"
              className="text-base rounded-lg"
            >
              Browse File
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
