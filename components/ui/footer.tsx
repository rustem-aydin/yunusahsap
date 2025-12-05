import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "./seperator";
import { Logo } from "../blocks/logo";

const footerSections = [
  {
    title: "Sayfalar",
    links: [
      {
        title: "Anasayfa",
        href: "/",
      },
      {
        title: "Hakkımızda",
        href: "/hakkinda",
      },
      {
        title: "İletişim",
        href: "/iletisim",
      },
    ],
  },
  {
    title: "Hizmet Yerleri",
    links: [
      {
        title: "İstanbul-Ankara Taşımacılık",
        href: "https://isikevdeneve.com",
      },
      {
        title: "İstanbul-İzmir Taşımacılık",
        href: "https://isikevdeneve.com",
      },
      {
        title: "İstanbul-Samsun Taşımacılık",
        href: "https://isikevdeneve.com",
      },
      {
        title: "İstanbul-Bursa Taşımacılık",
        href: "https://isikevdeneve.com",
      },
      {
        title: "İstanbul İçi Taşımacılık",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Tüm Türkiye",
        href: "https://isikevdeneve.com",
      },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      {
        title: "Ekspertiz Hizmeti",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Demonte Kolileme",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Hedefe Taşıma",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Asansör Hizmeti",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Monte Etme",
        href: "https://isikevdeneve.com",
      },
      {
        title: "Eşyaları Yerleştirme",
        href: "https://isikevdeneve.com",
      },
    ],
  },
  {
    title: "İletişim",
    links: [
      {
        title: "E-posta Adresi",
        href: "mailto:isik.nakliyat.maltepe@gmail.com",
      },
      {
        title: "+90 532 685 06 15",
        href: "tel:+905326850615",
      },
      {
        title: "",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-24  flex flex-col">
      <div className="grow" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              <Logo />
              <p className="mt-4 text-muted-foreground">
                Taşımacılık sürecinizi IŞIK gibi aydınlatıyor, her adımda güven
                ve kalite sunuyoruz.
              </p>
            </div>
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank"></Link>. Tüm Hakları Saklıdır
            </span>
            <span className="text-muted-foreground">
              Bu site{" "}
              <Link
                className="underline"
                href="https://rustemaydin.com"
                target="_blank"
              >
                rustemaydin.com
              </Link>{" "}
              tarafından geliştirilmiştir.
            </span>

            {/* <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
