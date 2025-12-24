type HeaderProps = {
    children: React.ReactNode
}

export default function Header({children}: HeaderProps) {
  return (
    <h1 className="uppercase text-5xl font-bold bitcount-ink-regular text-center">{children}</h1>
  )
}
