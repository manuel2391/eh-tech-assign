

type ChipProps = {
    value:string
}

const Chip = (props: ChipProps) => {
    return(
        <>
        
            <div className="rounded-xl border overflow-hidden w-min border-primary py-1 px-2 text-xs text-white bg-executive-blue">
                <p className="text-nowrap">{props.value.toUpperCase()}</p>
            </div>
        
        </>
    )
}

export default Chip;