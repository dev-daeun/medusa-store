import { Badge } from "@modules/common/components/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">주의:</span> 테스트용 결제수단입니다.
    </Badge>
  )
}

export default PaymentTest
