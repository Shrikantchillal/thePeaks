export function getPeaksData(data: any) {
    return {
        type: 'GET_PEAKS_DATA',
        data
    }
}

export function getTestData(data: string) {
    return {
        type: 'GET_TEST_DATA',
        data
    }
}