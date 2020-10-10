import { rest } from 'msw'

export const handlers = [

    // Handles a GET /user request
    rest.get('https://type.fit/api/quotes', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [{text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison"}],
            )
        )
    }),
]