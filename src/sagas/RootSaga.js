import getMostPopularData from "./GetMostPopularDataSaga";

export default function* RootSagas() {
    yield [getMostPopularData()];
}