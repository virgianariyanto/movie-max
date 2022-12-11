import {IconBrandGithub, IconBrandLinkedin, IconBrandInstagram} from '@tabler/icons'

export default function Header() {

  return (
    <div className="w-full bg-slate-900">
        <header className="w-[60%] h-10 flex items-center justify-between mx-auto">
                <a className="text-white font-semibold text-xl">MovieMax</a>
            
            <div className="flex gap-x-2">
                <a href="https://github.com/virgianariyanto" className="text-white"><IconBrandGithub /></a>
                <a href="https://www.linkedin.com/in/virgian-jaya-ariyanto-4a33ba22a/" className="text-white"><IconBrandLinkedin /></a>
                <a href="https://www.instagram.com/sm.ariyanto/" className="text-white"><IconBrandInstagram /></a>
            </div>
        </header>
    </div>
  )
}