import { Metadata } from "next"
import { Suspense } from "react"

import VerifyAccount from "@modules/account/components/verify-account"

export const metadata: Metadata = {
  title: "이메일 인증",
  description: "이메일 인증을 완료하고 회원가입을 마무리하세요",
}

export default function VerifyAccountPage() {
  return (
    <div className="w-full flex justify-center px-8 py-12">
      <Suspense
        fallback={
          <p className="text-base-regular text-ui-fg-base">
            이메일을 인증하고 있습니다...
          </p>
        }
      >
        <VerifyAccount />
      </Suspense>
    </div>
  )
}
