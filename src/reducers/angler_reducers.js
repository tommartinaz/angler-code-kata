import {
    FETCH_ANGLERS_SUCCESS
} from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ANGLERS_SUCCESS:
            const unsortedFish = action.payload.data.map(fish => {
                fish.weight = fish.girth*fish.girth*fish.length/800
                return fish
            })
            return unsortedFish;
        default:
            return state;
    }
}