import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bottom-0 w-full py-5 flex items-center justify-between px-5 bg-gray-900 border-t border-t-gray-600">
      <div>
        <h1>
          Desenvolvido por Luiz Anderson
        </h1>
      </div>
      <Logo />
    </footer>
  )
}