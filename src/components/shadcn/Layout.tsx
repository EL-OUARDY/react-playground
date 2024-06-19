import {
  Home,
  LineChart,
  Package,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
  User,
  PanelLeftOpen,
  PanelLeftClose,
  Bell,
  Languages,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <>
      <ScrollArea className="h-screen w-screen border selection:bg-secondary selection:text-foreground">
        <div className="flex min-h-screen w-full bg-muted/40">
          <aside
            className={`${
              isSideBarOpen ? "md:w-[220px] lg:w-[260px]" : ""
            } z-10 hidden min-w-14 flex-col border-r bg-background sm:flex px-4`}
          >
            <div className="w-full flex h-14 items-center border-b lg:h-[60px]">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <Languages className="h-6 w-6" />
                {isSideBarOpen && <span className="">Translator</span>}
              </Link>
              {isSideBarOpen && (
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-8 w-8"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              )}
            </div>
            <nav className="flex flex-col items-center gap-4 sm:py-5 ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      {isSideBarOpen && <span className="">Dashboard</span>}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className={isSideBarOpen ? "hidden" : ""}
                    side="right"
                  >
                    Dashboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {isSideBarOpen && <span className="">Orders</span>}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className={isSideBarOpen ? "hidden" : ""}
                    side="right"
                  >
                    Orders
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      {isSideBarOpen && <span className="">Products</span>}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className={isSideBarOpen ? "hidden" : ""}
                    side="right"
                  >
                    Products
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      {isSideBarOpen && <span className="">Customers</span>}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className={isSideBarOpen ? "hidden" : ""}
                    side="right"
                  >
                    Customers
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to="#"
                      className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      {isSideBarOpen && <span className="">Analytics</span>}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    className={isSideBarOpen ? "hidden" : ""}
                    side="right"
                  >
                    Analytics
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 sm:py-5">
              {!isSideBarOpen && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                        to="#"
                        className="w-full  flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                      >
                        <PanelLeftOpen className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      className={isSideBarOpen ? "hidden" : ""}
                      side="right"
                    >
                      Expand Menu
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <div className="w-full flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to="#"
                        className="flex items-center gap-4 rounded-xl py-2 text-muted-foreground hover:text-foreground"
                      >
                        <Settings className="h-5 w-5" />
                        {isSideBarOpen && <span className="">Settings</span>}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      className={isSideBarOpen ? "hidden" : ""}
                      side="right"
                    >
                      Settings
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {isSideBarOpen && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                          variant="outline"
                          size="icon"
                          className="ml-auto h-8 w-8 flex items-center gap-4  py-2 text-muted-foreground hover:text-foreground"
                        >
                          <PanelLeftClose className="h-5 w-5" />
                          <span className="sr-only">Collapse Menu</span>
                        </Button>
                      </TooltipTrigger>
                      {isSideBarOpen && (
                        <TooltipContent side="right">
                          Collapse Menu
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </nav>
          </aside>
          <div className="h-screen flex flex-col sm:gap-4 sm:py-4 flex-1">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Languages className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Translator</span>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Settings className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="flex items-center m-auto md:hidden">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                  <Languages className="h-6 w-6" />
                  <span className="">Translator</span>
                </Link>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden md:rounded-full md:ml-auto"
                  >
                    <User />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex flex-col flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
              <div
                className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                x-chunk="dashboard-02-chunk-1"
              >
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">
                    You have no products
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can start selling as soon as you add a product.
                  </p>
                  <Button className="mt-4">Add Product</Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
