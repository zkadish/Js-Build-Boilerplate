import { expect } from 'chai';

import dom from './testHelper';
var testFn = require('../src/js/app');

describe('The app container <div></div>', () => {
  let app, button, value, num;
  before(() => {
    app = document.querySelector('.app-container');
  })
  
  it('should be assigned the "app-container" class', () => {
    expect(app).to.be.ok;
  });

  before(() => {
    button = document.querySelectorAll('button');
  })

  it('should render an increment and decrement button', () => {
    expect(button).to.have.length(2);
    expect(button[0].innerHTML).to.equal('increment');
    expect(button[1].innerHTML).to.equal('decrement');
  });

  before(() => {
    value = document.querySelector('.value');
  })

  it('should render a div with the class "value"', () => {
    expect(value).to.be.ok;
  });

  describe('when the increment button is clicked', () => {
    var value, num;
    beforeEach(() => {
      value = document.querySelector('.value');
      num = Number(value.innerHTML);
    })

    it('num should increase', () => {
      testFn.increment();
      expect(Number(value.innerHTML)).to.be.above(Number(num));
    })

    it('num should decrease', () => {
      testFn.decrement();
      expect(Number(value.innerHTML)).to.be.below(Number(num));
    })
  })
})

