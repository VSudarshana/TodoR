const Card = (props) => {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className="px-10 py-5 border border-black rounded-xl text-center flex-grow">
            <h1 className="font-medium text-2xl">{props.title}</h1>
            <h1>{props.subtitle}</h1>
        </div>
    );
}

export default Card