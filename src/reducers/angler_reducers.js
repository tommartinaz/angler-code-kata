import {
    FETCH_ANGLERS_SUCCESS
} from '../actions/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ANGLERS_SUCCESS:
            const unsortedFish = action.payload.data.map(fish => {
                return {...fish, weight: Math.round(fish.girth*fish.girth*fish.length/800)};
            });
            
            const channelFish = unsortedFish.filter(fish => fish.species === 'channel').sort((a, b) => b.weight - a.weight).slice(0,5)
            const flatFish = unsortedFish.filter(fish => fish.species === 'flathead').sort((a, b) => b.weight - a.weight).slice(0,5);
            const blueFish = unsortedFish.filter(fish => fish.species === 'blue').sort((a, b) => b.weight - a.weight).slice(0,5)
            return {
                channel: channelFish,
                flat: flatFish,
                blue: blueFish
            };
        default:
            return state;
    }
}