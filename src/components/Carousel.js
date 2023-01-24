
import { useEffect, useState } from "react";

function Carousel(props) {
    const [index, setIndex] = useState(0);

    const mod = (n, m) => {
        let result = n % m;

        // Return a positive value
        return result >= 0 ? result : result + m;
    };

    const cards = [
        {
            id: "1",
            image: props.img1,
        },
        {
            id: "2",
            image: props.img2,
        },
        {
            id: "3",
            image: props.img3,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards.length);
            // console.log(index);
        }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className="carousel__desktop">
            {cards && cards.map((item, i) => {
                const indexLeft = mod(index - 1, cards.length);
                const indexRight = mod(index + 1, cards.length);

                let className = "card";

                if (i === index) {
                    className = "card card--active";
                } else if (i === indexRight) {
                    className = "card card--right";
                } else if (i === indexLeft) {
                    className = "card card--left";
                } else className = "card";

                return (
                    <img
                        key={item.id}
                        className={className}
                        src={item.image}
                        alt="Comic"
                    ></img>
                );
            })}
        </div>
    );
}


export default Carousel