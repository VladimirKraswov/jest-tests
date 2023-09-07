// Тестирование при помощи снимков
import React from 'react';
import renderer from 'react-test-renderer';

import { Link } from '../components/Link';

it('Изменяет состояние при наведении курсора', () => {
  const component = renderer.create(
    <Link page="login">Login</Link>,
  );
  // Отрисуем компонент
  let tree: any = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Имитируем наведение мышкой
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // Перерисовываем компонент
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Имитируем уход мышки
  renderer.act(() => {
    tree?.props.onMouseLeave();
  });
  // Перерисовываем компонент
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});