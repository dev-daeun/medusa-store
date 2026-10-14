import { declineTransferRequest } from "@lib/data/orders"
import { Heading, Text } from "@modules/common/components/ui"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  const { success, error } = await declineTransferRequest(id, token)

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        {success && (
          <>
            <Heading level="h1" className="text-xl text-zinc-900">
              주문연결 거절 완료
            </Heading>
            <Text className="text-zinc-600">
              주문 {id}의 주문연결 요청을 거절했습니다.
            </Text>
          </>
        )}
        {!success && (
          <>
            <Text className="text-zinc-600">
              주문연결 요청을 거절하는 중 오류가 발생했습니다. 다시 시도해주세요.
            </Text>
            {error && (
              <Text className="text-red-500">오류 메시지: {error}</Text>
            )}
          </>
        )}
      </div>
    </div>
  )
}
