import { CardWithForm } from "@/components/ui/CardWithForm";
import { ThemeProvider } from "@/components/theme-provider";

function Shadcn() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex justify-center items-center h-screen bg-secondary">
          <CardWithForm></CardWithForm>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Shadcn;
