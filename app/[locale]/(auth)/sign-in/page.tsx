import { getTranslations } from "next-intl/server"
import {
  AuthCardWrapper,
  AuthFieldGroup,
  AuthFieldRow,
  AuthPrimaryCta,
  AuthSideLink,
  AuthUserCompanyTabs,
} from "@/features/auth/components/auth-card-wrapper"

export default async function SignInPage() {
  const t = await getTranslations("Auth.signIn")

  return (
    <AuthCardWrapper
      backHref="/"
      backLabel={t("back")}
      logoAlt={t("logoAlt")}
      title={t("title")}
      description={t("description")}
      footerPrefix={t("noAccount")}
      footerActionLabel={t("signUp")}
      footerActionHref="/sign-up"
      topSlot={<AuthUserCompanyTabs activeLabel={t("userTab")} inactiveLabel={t("companyTab")} />}
      asideSlot={<AuthSideLink href="/forgot-password" label={t("forgotPassword")} />}
    >
      <AuthFieldGroup>
        <AuthFieldRow iconSrc="/auth/email.svg" type="email" placeholder={t("fields.emailPlaceholder")} />
        <AuthFieldRow
          iconSrc="/auth/password.svg"
          type="password"
          placeholder={t("fields.passwordPlaceholder")}
          endIconSrc="/auth/eye.svg"
        />
      </AuthFieldGroup>
      <AuthPrimaryCta label={t("submit")} />
    </AuthCardWrapper>
  )
}
