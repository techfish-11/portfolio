import { Button } from "./ui/button"
import Link from "next/link"
import { SiX, SiDiscord, SiGithub } from "@icons-pack/react-simple-icons"

export default function Header() {
  return (
    <div className="flex items-center gap-3 h-16 px-4 border m-4 rounded-full shadow-sm">
      <Button variant={"ghost"} className="font-bold text-xl rounded-full" asChild>
        <Link href={"/"} >Techfish</Link>
      </Button>
      <div>
        <Button asChild variant="ghost">
          <Link href="/mypage">About</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/items">Projects</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/mypage">Link</Link>
        </Button>
      </div>
      <span className="flex-1"></span>
      <div>
        <Button asChild variant="ghost" size={"icon"}>
            <Link href="https://x.com/11sakana1"><SiX size={18} /></Link>
        </Button>
        <Button asChild variant="ghost" size={"icon"}>
            <Link href="https://discord.gg/mNDvAYayp5"><SiDiscord size={20} /></Link>
        </Button>
        <Button asChild variant="ghost" size={"icon"}>
            <Link href="https://github.com/techfish-11"><SiGithub size={20} /></Link>
        </Button>
      </div>
    </div>
  )
}