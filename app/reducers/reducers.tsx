const INITIAL_STATE = {
    peaksData: [],
    testData: '',
}

function reducers(state = INITIAL_STATE, action: any) {
    switch(action.type) {
        case 'GET_PEAKS_DATA':
            return {
                ...state,
                peaksData: action.data
            };
        case 'GET_TEST_DATA':
            return {
                ...state,
                testData: action.data
            };
        default:
            return {
                ...state
            }
    }
}

export default reducers;