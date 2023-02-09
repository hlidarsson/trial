import AnswerItem from "./AnswerItem";

function AnswerWrapper () {
    return (
        <>
            <div className="answerWrapper">
                <p>Answers</p>
                <button className="header-btn ask">Ask questions</button>
            </div>
            <AnswerItem />
        </>
    )
}

export default AnswerWrapper;
