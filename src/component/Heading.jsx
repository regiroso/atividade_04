import styles from'./Heading.module.css'
export function Heading1(props){
    if (props.children === "Lucro"){
        return(
            <h1 style={{ color: 'var(--lucro)', textAlign:'center' }}>{props.children}</h1>
        )
    }

    if (props.children === "Prejuízo"){
        return(
            <h1 style={{ color: 'var(--prejuizo)', textAlign:'center' }}>{props.children}</h1>
        )
    }
    
    else{
        return(
            <h1 style={{ color: 'var(--normal)', textAlign:'center' }} >{props.children}</h1>
        )
    }

}