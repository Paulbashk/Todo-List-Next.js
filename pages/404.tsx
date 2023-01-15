import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function NotFoundPage() {
  const titlePage = "Страницы не существует";

  return (
    <MainLayout title={titlePage}>
      <div className="flex flex-col mx-auto w-full text-center items-center">
        <h1 className="text-[24px] font-bold mb-[16px]">{titlePage}</h1>
        <Link href={'/'} className="text-underline text-[16px] font-bold hover:cursor-pointer hover:opacity-75 transition-opacity duration-500 ease-linear">Вернуться на главную</Link>
      </div>
    </MainLayout>
  );
}