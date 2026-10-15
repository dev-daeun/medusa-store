import { Heading, Text } from "@modules/common/components/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <Heading level="h1" className="text-xl text-zinc-900">
          주문 {id}의 주문연결 요청
        </Heading>
        <Text className="text-zinc-600">
          주문({id})의 소유권을 다른 계정으로 이전하는 주문연결 요청을 받았습니다.
          요청에 동의하시면 아래 버튼을 눌러 수락해주세요.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <Text className="text-zinc-600">
          요청을 수락하면 새 소유자가 이 주문에 대한 모든 책임과 권한을 넘겨받습니다.
        </Text>
        <Text className="text-zinc-600">
          요청을 알지 못하거나 주문의 소유권을 유지하려면 별도의 조치를 하지
          않으셔도 됩니다.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}
