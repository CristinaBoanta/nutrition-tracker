import "./Card.css";

interface Props {
    name: string,
    amountOfCalories: number,
    protein: number,
    fiber: number,
    cardImage: string
};

const Card = (props: Props) => {
    const {name, amountOfCalories, protein, fiber, cardImage} = props;
    return (
        <div className="card">
            Card

            <img className="card-img" src={cardImage} />

            <div className="details">
                <div className="name">{name}</div>
                <div className="amount-of-calories">{amountOfCalories}</div>
                <div className="protein">{protein}</div>
                <div className="fiber">{fiber}</div>
            </div>
        </div>
    )
};

export default Card;