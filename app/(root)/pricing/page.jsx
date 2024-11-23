import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("metadata.pricing");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PricingPage() {
  const t = useTranslations("pricing");
  return (
    <main>
      <PageHeader title={t("title")} />
      <div className="container py-page">
        <Pricing />
      </div>
    </main>
  );
}
