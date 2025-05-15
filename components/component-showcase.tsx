"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Color options
const colorOptions = [
  { name: "Emerald", bg: "bg-emerald-500", hover: "hover:bg-emerald-600", color: "#10b981" },
  { name: "Blue", bg: "bg-blue-500", hover: "hover:bg-blue-600", color: "#3b82f6" },
  { name: "Purple", bg: "bg-purple-500", hover: "hover:bg-purple-600", color: "#8b5cf6" },
  { name: "Rose", bg: "bg-rose-500", hover: "hover:bg-rose-600", color: "#f43f5e" },
  { name: "Amber", bg: "bg-amber-500", hover: "hover:bg-amber-600", color: "#f59e0b" },
  { name: "Teal", bg: "bg-teal-500", hover: "hover:bg-teal-600", color: "#14b8a6" },
]

export default function ComponentShowcase() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])

  return (
    <section className="w-full py-12 md:py-24 bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beautiful Components</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Xui provides a comprehensive set of UI components that are accessible, customizable, and beautiful out of
              the box.
            </p>
          </div>

          {/* Color Picker */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full transition-transform ${
                  selectedColor.name === color.name ? "ring-2 ring-white scale-110" : ""
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color.name} color`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button className={`${selectedColor.bg} ${selectedColor.hover} text-black`}>Brand</Button>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                    <Button size="lg" className={`${selectedColor.bg} ${selectedColor.hover} text-black`}>
                      Large
                    </Button>
                    <Button className={`${selectedColor.bg} ${selectedColor.hover} text-black`}>Default</Button>
                    <Button size="sm" className={`${selectedColor.bg} ${selectedColor.hover} text-black`}>
                      Small
                    </Button>
                    <Button size="icon" className={`${selectedColor.bg} ${selectedColor.hover} text-black`}>
                      <span>+</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className={`rounded-full p-4`} style={{ backgroundColor: `${selectedColor.color}20` }}>
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: selectedColor.color }}></div>
                    </div>
                    <h3 className="text-xl font-bold">Basic Card</h3>
                    <p className="text-muted-foreground">Simple card with minimal styling</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className={`rounded-full p-4`} style={{ backgroundColor: `${selectedColor.color}20` }}>
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: selectedColor.color }}></div>
                    </div>
                    <h3 className="text-xl font-bold">Interactive Card</h3>
                    <p className="text-muted-foreground">Card with hover and focus states</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className={`rounded-full p-4`} style={{ backgroundColor: `${selectedColor.color}20` }}>
                      <div className="h-8 w-8 rounded-full" style={{ backgroundColor: selectedColor.color }}></div>
                    </div>
                    <h3 className="text-xl font-bold">Media Card</h3>
                    <p className="text-muted-foreground">Card with image and content</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4 max-w-md mx-auto">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Password
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>
                    <Button className={`w-full ${selectedColor.bg} ${selectedColor.hover} text-black`}>Sign In</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
