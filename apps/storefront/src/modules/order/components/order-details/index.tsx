import { HttpTypes } from "@medusajs/types"
import { Text } from "@modules/common/components/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const statusLabels: Record<string, string> = {
      not_fulfilled: "배송준비중",
      partially_fulfilled: "일부상품 배송준비 완료",
      fulfilled: "배송준비 완료",
      partially_shipped: "일부상품 발송완료",
      shipped: "발송완료",
      partially_delivered: "일부상품 배송완료",
      delivered: "배송완료",
      canceled: "취소됨",
      not_paid: "미결제",
      awaiting: "결제대기",
      authorized: "결제승인",
      partially_authorized: "일부 결제승인",
      captured: "결제완료",
      partially_captured: "일부 결제완료",
      refunded: "환불완료",
      partially_refunded: "일부 환불완료",
      requires_action: "추가결제 절차필요",
    }

    return statusLabels[str] || "상태확인중"
  }

  return (
    <div>
      <Text>
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        {" "}주소로 주문 확인 안내를 보냈습니다.
      </Text>
      <Text className="mt-2">
        주문일:{" "}
        <span data-testid="order-date">
          {new Date(order.created_at).toLocaleDateString("ko-KR", {
            timeZone: "Asia/Seoul",
          })}
        </span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        주문번호: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              배송 상태:{" "}
              <span className="text-ui-fg-subtle " data-testid="order-status">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              결제 상태:{" "}
              <span
                className="text-ui-fg-subtle "
                sata-testid="order-payment-status"
              >
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
