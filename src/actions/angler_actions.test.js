import axios from 'axios';
import * as actions from './angler_actions';

describe('.fetch_anglers', () => {
    it('fires the correct action', async () => {
        const actionCall = actions.fetch_anglers();
        const response = await actionCall.payload
        expect(actionCall.type).toBe('fetch_anglers')
    });

    it('makes a GET request and returns the correct number of items', async () => {
        const actionCall = actions.fetch_anglers();
        const response = await actionCall.payload;
        expect(response.data.length).toBe(100);
    })
})