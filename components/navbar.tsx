"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile" 

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isDrawerOpen])

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-500">Xui</span>
          </Link>
          {!isMobile && (
            <nav className="flex gap-6">
              <Link href="/docs" className="text-sm font-medium transition-colors hover:text-emerald-500">
                Docs
              </Link>
              <Link href="/components" className="text-sm font-medium transition-colors hover:text-emerald-500">
                Components
              </Link>
              <Link href="/coffee" className="text-sm font-medium transition-colors hover:text-emerald-500">
                Buy me a coffee
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {!isMobile && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/xui/xui">GitHub</Link>
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black" asChild>
                <Link href="/docs">Get Started</Link>
              </Button>
            </>
          )}
          {isMobile && ( 
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex justify-between items-center p-4 border-b">
                  <span className="text-xl font-bold text-emerald-500">Xui</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
                <nav className="flex flex-col p-4">
                  <Link
                    href="/docs"
                    className="py-3 text-sm font-medium transition-colors hover:text-emerald-500 border-b border-slate-800"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/components"
                    className="py-3 text-sm font-medium transition-colors hover:text-emerald-500 border-b border-slate-800"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Components
                  </Link>
                  <Link
                    href="/coffee"
                    className="py-3 text-sm font-medium transition-colors hover:text-emerald-500 border-b border-slate-800"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Buy me a coffee
                  </Link>
                  <div className="pt-4 flex flex-col gap-2">
                    <Button variant="outline" size="sm" className="justify-start" asChild>
                      <Link href="https://github.com/xui/xui" onClick={() => setIsDrawerOpen(false)}>GitHub</Link>
                    </Button>
                    <Button className="justify-start bg-emerald-500 hover:bg-emerald-600 text-black" asChild>
                      <Link href="/docs" onClick={() => setIsDrawerOpen(false)}>Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  )
}
