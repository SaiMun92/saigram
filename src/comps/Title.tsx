import React, {useEffect, useState} from 'react';
import axios from "axios";

const Title = () => {

    const [quote, setQuote] = useState(null);
    const fetch_quotes = async (): Promise<any> => {
        try {
            const response = await axios.get("https://type.fit/api/quotes");
            const json_list = response.data;
            const selector = Math.floor(Math.random() * json_list.length);
            setQuote(json_list[selector]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetch_quotes().then(r => r);
    }, []);

    return (
        <div className="title">
            <h1>SaiGram</h1>
            <h2>Your Pictures</h2>
            <p data-testid="quote-test">{quote && `${quote.text} - ${quote.author}`}</p>
        </div>
    )
}

export default Title;