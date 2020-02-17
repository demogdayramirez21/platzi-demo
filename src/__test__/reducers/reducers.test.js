import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Initial State ', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Add Cart', () => {
    const InitialState = {
      cart: [],
    };
    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(InitialState, action)).toEqual(expected);
  });

});
