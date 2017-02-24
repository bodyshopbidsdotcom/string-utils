import React from 'react';
import ReactDOM from 'react-dom';
import stringUtils from 'snapsheet-string-utils';

const methods = {
  'capitalize': {
    examples: [
      ['Hello World'],
      ['hello world'],
      ['hello'],
      ['Hello World', true],
      ['hello world', true],
      ['hello', true],
      ['Hello World', false],
      ['hello world', false],
      ['hello', false]
    ]
  },
  'dasherize': {
    examples: [
      ['Hello World'],
      ['hello world'],
      ['hello']
    ]
  },
  'humanize': {
    examples: [
      ['Hello World'],
      ['hello_world'],
      ['Hello-World'],
      ['helloWorld'],
      ['HelloWorld'],
      ['Hello World', false],
      ['hello_world', false],
      ['Hello-World', false],
      ['helloWorld', false],
      ['HelloWorld', false],
      ['Hello World'],
      ['hello world'],
      ['hello']
    ]
  }
};

function App(props) {
  return (
    <div>
      {Object.keys(methods).map(method => {
        return (
          <div key={method} id={method}>

            <h2><a href={`#${method}`}>{method}</a></h2>
            <div>
              {
                methods[method].examples.map((test, index) => {
                  return (
                    <div key={`${method}-${index}`}>
                      <p>{`${method}(${test.map(item => JSON.stringify(item)).join(', ')}) => ${stringUtils[method](...test)}`}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}


ReactDOM.render((
  <App />
), document.getElementById('root'));
