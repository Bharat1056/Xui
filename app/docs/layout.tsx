export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-between">
      {children}
    </div>
  )
}
