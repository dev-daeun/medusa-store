import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6">메두사 스토어에 오신 것을 환영해요</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        즐거운 쇼핑을 시작하기 전에 로그인이 필요합니다
      </p>
      {message?.state === "verification_required" && (
        <div
          className="w-full mb-6 text-center text-base-regular text-ui-fg-base bg-ui-bg-subtle border border-ui-border-base rounded-rounded p-4"
          data-testid="login-verification-message"
        >
          We sent a verification link to <strong>{message.email}</strong>.
          Please verify your email, then sign in.
        </div>
      )}
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="이메일"
            name="email"
            type="email"
            title="이메일을 입력해주세요"
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="비밀번호"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage
          error={message?.state === "error" ? message.error : null}
          data-testid="login-error-message"
        />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
          로그인
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        아직 계정이 없으신가요?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          회원가입
        </button>
      </span>
    </div>
  )
}

export default Login
