"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6">
        메두사 스토어 회원이 되어주세요
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        즐거운 쇼핑을 시작하기 전에 회원가입이 필요합니다
      </p>
      {message?.state === "verification_required" && (
        <div
          className="w-full mb-4 text-center text-base-regular text-ui-fg-base bg-ui-bg-subtle border border-ui-border-base rounded-rounded p-4"
          data-testid="register-verification-message"
        >
          We sent a verification link to <strong>{message.email}</strong>.
          Please check your inbox to verify your email, then sign in.
        </div>
      )}
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="이름"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="성"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="이메일"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="휴대폰번호"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="비밀번호"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage
          error={message?.state === "error" ? message.error : null}
          data-testid="register-error"
        />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          계정 생성 시, 메두사 스토어의{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            개인정보 처리방침
          </LocalizedClientLink>{" "}
          및
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            이용약관
          </LocalizedClientLink>
          에 동의하신 것으로 간주됩니다.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          회원가입
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        이미 계정이 있으신가요?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          로그인
        </button>
      </span>
    </div>
  )
}

export default Register
