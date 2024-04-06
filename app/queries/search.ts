export const searchQuery = () => {
    return {
        url: 'https://content.guardianapis.com/search?api-key=d5663f2f-9ea3-439b-9834-7cf729a18030',
        body: {

        },
        transform: (responseBody: any) => {
            return {
                echoedMessage: responseBody
            }
        },
        update: (prev: any, next: any) => next,

    }
};

export const getQueries = (state: any) => state.queries;
export const getEntities = (state: any) => state.entities