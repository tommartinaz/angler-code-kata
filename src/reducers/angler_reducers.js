import {
    FETCH_ANGLERS_SUCCESS
} from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ANGLERS_SUCCESS:
            const unsortedFish = action.payload.data.map(fish => {
                return {...fish, weight: Math.round(fish.girth*fish.girth*fish.length/800)};
            });

            const sortedFish = unsortedFish.sort((a,b) => b.weight - a.weight);
            const fishes =  sortedFish.reduce((prev, next) => {
                if (!prev[next.species]) prev[next.species] = []
                prev[next.species].push(next)
                return prev;
            }, {});
            console.log("FISHES FROM REDUCER", fishes)
            return fishes;
        default:
            return state;
    }
}