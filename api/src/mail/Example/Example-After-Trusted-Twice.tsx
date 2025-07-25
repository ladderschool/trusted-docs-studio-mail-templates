import React from 'react'

import {
  Html,
  Text,
  Hr,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
} from '@react-email/components'

export function ExampleTrustedTwiceNewEmail(
  { when }: { when: string } = { when: new Date().toLocaleString() }
) {
  return (
    <Html lang="en">
      <Head />
      <Preview>An example trusted email second template</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Example Trusted Email
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              This email was generated after trusted document store was
              installed.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Message was sent on {when}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
