import "./CardList.css";
import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
    return (
        <div className="card-list">
            <Card name="banana" amountOfCalories={88.7} protein={1.1} fiber={2.6} cardImage="https://nationaltoday.com/wp-content/uploads/2021/12/NATIONAL-BANANA-DAY--1200x834.jpg" />
            <Card name="potato" amountOfCalories={93} protein={2.5} fiber={1.8} cardImage="https://nationaltoday.com/wp-content/uploads/2021/12/NATIONAL-BANANA-DAY--1200x834.jpg" />
        </div>
    )
};

export default CardList;