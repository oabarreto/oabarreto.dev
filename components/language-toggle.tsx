"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18nStore } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useI18nStore();

  return (
    <Button
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
