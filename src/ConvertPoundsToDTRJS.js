export default function ConvertPoundsToDTRJS(props) {
    const oneDTRJ = 262
    const userWeight = props.inputs.undefined
    const result = userWeight / oneDTRJ
    console.log(props.inputs.undefined)
    console.log(oneDTRJ)
    return (
        <div>
            <br></br>
            Know your worth:
            <br></br>
            <h1>You are worth {result.toFixed(3) * 100}% of one DTRJ </h1>
        </div>
    )
}