import Head from "next/head";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const MainLayout = ({ children, title = 'Page' }: MainLayoutProps) => {
  const pageTitle = `${title} | Nextjs App`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
      </Head>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <ul className="list-none ml-auto flex items-center">
            <li className="text-white text-xl hover:cursor-pointer hover:opacity-75 transition-opacity duration-500 ease-linear mr-[24px]">
              <Link href={'/todos'}>Список задач</Link>
            </li>
            <li className="text-white text-xl hover:cursor-pointer hover:opacity-75 transition-opacity duration-500 ease-linear">
              <Link href={'/'}>Главная</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="w-full d-flex flex-column items-center mt-[60px] px-[20px]">
        {children}
      </main>
    </>
  );
}