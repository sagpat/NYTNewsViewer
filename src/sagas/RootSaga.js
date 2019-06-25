import getMostPopularData from "./MostPopularDataSaga";

export default function* RootSagas() {
    yield [getMostPopularData()];
}