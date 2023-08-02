export default function Quote({ text, author }) {
    


    return (
        <blockquote id='quote'>
            <h3 id='text'>{text}</h3>
            <p id='author'>~{author}</p>
        </blockquote>
    )
}