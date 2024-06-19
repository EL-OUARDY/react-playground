import { Layout } from "@/components/shadcn/Layout";
import { ThemeProvider } from "@/components/shadcn/theme-provider";

function Shadcn() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout></Layout>
      </ThemeProvider>
    </>
  );
}

export default Shadcn;
