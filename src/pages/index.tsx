import tw from 'twin.macro'
import Button from '../components/Button'


const styles = {
  container: () => [
    tw`flex flex-col items-center justify-center h-screen`,
    tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Index = () => (
  <div css={styles.container}>
    <div tw="flex flex-row justify-center gap-y-5 mb-5">
      <h1 tw="font-sans font-bold text-lg text-white">Welcome to the next.js x tailwindcss x typescript template</h1>
    </div>
    <div tw="flex flex-row justify-center gap-x-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
  </div>
)

export default Index
