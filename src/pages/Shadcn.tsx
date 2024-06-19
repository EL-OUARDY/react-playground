import { ThemeProvider } from "@/components/theme-provider";

function Shadcn() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div></div>
      </ThemeProvider>
    </>
  );
}

export default Shadcn;
