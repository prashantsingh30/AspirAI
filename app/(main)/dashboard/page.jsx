import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

export default async function DashboardPage() {
  const { isOnBoarded } = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();

  if (!isOnBoarded) redirect("/onboarding");

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}
