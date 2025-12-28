export default function Button(props) {
    const { children, onpress } = props
    return (<button onClick={onpress}
        className="bg-black px-2 rounded-4xl text-white hover:bg-teal-700 transition-all py-2"
    >{children}</button>
    )
}
