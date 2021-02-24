import { GET_REGIONS_SUCCESS } from './actions';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
};

const actionHandler = {

  [GET_REGIONS_SUCCESS](state, action) {
    const regions = action.payload.map((region) => ({ ...region, clicked: false }));
    return { ...state, regions };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
