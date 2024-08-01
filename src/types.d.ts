declare module '*.module.css'

type useState<T> = [T, React.Dispatch<T>];
type createContext<T> = React.Context<T>;

type RoomItem = {
    roomnum: number
    category: string
    bookings: {
        firstname: string
        lastname: string
        pax: number
        dates: string[]
    }[]
}