import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const translation = useTranslation();
  const { notFound } = translation;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{notFound.title}</h1>
        <p className="mb-4 text-xl text-gray-600">{notFound.message}</p>
        <a
          href="/"
          className="text-blue-500 underline transition-colors duration-300 hover:text-blue-700"
        >
          {notFound.cta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
