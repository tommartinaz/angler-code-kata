import {
    FETCH_ANGLERS_SUCCESS
} from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ANGLERS_SUCCESS:
            const unsortedFish = action.payload.data.map(fish => {
                fish.weight = Math.round(fish.girth*fish.girth*fish.length/800)
                return fish
            });
            const sortedFish = unsortedFish.filter(fish => fish.species === 'channel').sort((a, b) => b.weight - a.weight).slice(0,5)
            return sortedFish;
        default:
            return state;
    }
}