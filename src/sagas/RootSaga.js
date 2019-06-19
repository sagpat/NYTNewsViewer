import getMostPopularData from "./GetMostPopularData";

export default function* RootSagas() {
    yield [getMostPopularData()];
}