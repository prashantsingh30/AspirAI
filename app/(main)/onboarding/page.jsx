import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";

export default async function OnboardingPage() {
  const { isOnBoarded } = await getUserOnboardingStatus();

  if (isOnBoarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
