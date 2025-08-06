import { Count } from './count'

export const Header = () => {
  return (
    <div className="h-[80] w-full bg-gray-200 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div>
        <Count />
      </div>
    </div>
  )
}
