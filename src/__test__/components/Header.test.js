import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Mounted', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );

  test('should ', () => {
    expect(header.length).toEqual(1);
  });

  test('Render Title ', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Take a snapshot', () => {
  test('Comprobar snapshot Header ', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
