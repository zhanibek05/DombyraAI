/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x8Rgt4UZ8dN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function PlayBar() {
  return (
    <div className="flex items-center justify-center gap-4 bg-background px-4 py-2 rounded-lg shadow-sm">
      <Button variant="ghost" size="icon" className="hover:bg-muted">
        <RewindIcon className="w-5 h-5 text-muted-foreground" />
        <span className="sr-only">Replay</span>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-muted">
        <PlayIcon className="w-5 h-5 text-muted-foreground" />
        <span className="sr-only">Play/Pause</span>
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-muted">
        <CircleStopIcon className="w-5 h-5 text-muted-foreground" />
        <span className="sr-only">Stop</span>
      </Button>
      <div className="relative">
        <Select defaultValue="1x">
          <SelectTrigger className="px-3 py-1 rounded-md bg-muted text-muted-foreground">
            <SelectValue>1x</SelectValue>
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0.5x">0.5x</SelectItem>
            <SelectItem value="0.75x">0.75x</SelectItem>
            <SelectItem value="1x">1x</SelectItem>
            <SelectItem value="1.25x">1.25x</SelectItem>
            <SelectItem value="1.5x">1.5x</SelectItem>
            <SelectItem value="2x">2x</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CircleStopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function RewindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}