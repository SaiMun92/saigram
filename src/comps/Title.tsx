import React, {useEffect, useState} from 'react';


const Title = () => {

    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetch_quotes = async () => {
            try {
                const response = await fetch("https://type.fit/api/quotes");
                const json_list = await response.json();
                const selector = Math.floor(Math.random() * json_list.length) + 1;
                setQuote(json_list[selector]);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetch_quotes();
    }, []);

    return (
        <div className="title">
            <h1>SaiGram</h1>
            <h2>Your Pictures</h2>
            <p>{quote && `${quote.text} - ${quote.author}`}</p>
        </div>
    )
}

export default Title;