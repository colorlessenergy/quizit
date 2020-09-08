import Head from 'next/head';

import classes from './Home.module.css';

import {useState} from 'react';

export default function Home({ questions }) {
  const [filter, updateFilter] = useState([]);

  function displayAnswer(ev) {
    return ev.currentTarget.querySelector('p').classList.toggle(classes['hidden']);
  }

  function updateLanguagesTofilter (language, ev) {
    ev.currentTarget.classList.toggle(classes['button__active']);

    if (filter.includes(language)) {
      let filteredArray = [...filter];

      filteredArray = filteredArray.filter((item) => {
        return item !== language;
      });

      return updateFilter(filteredArray);
    }

    updateFilter([...filter, language]);
  }

  let filteredQuestions = [];

  if (filter.length === 0) {
    filteredQuestions = questions;
  } else {
    filteredQuestions = questions.filter((question) => {
      return filter.includes(question.tag);
    });
  }


  

  let displayQuestions = filteredQuestions.map(function ({question, answer}, index) {
    return (
      <div
        className={classes['question']} 
        key={index}
        onClick={displayAnswer}>
        <h3>{question}</h3>
        <p className={[classes['hidden'], classes['question__answer']].join(' ')}>{answer}</p>
      </div>
    )
  });

  return (
    <div>
      <Head>
        <title>quiz it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={classes['title']}>
        quiz it
      </h1>
      <div className={classes['buttons']}>
        <button
          className={classes['button']} 
          onClick={(e) => updateLanguagesTofilter('javascript', e)}>JavaScript</button>
        <button
          className={classes['button']} 
          onClick={(e) => updateLanguagesTofilter('html', e)}>HTML</button>
        <button
          className={classes['button']} 
          onClick={(e) => updateLanguagesTofilter('css', e)}>CSS</button>
      </div>
      <div className={classes['questions']}>
        {displayQuestions}
      </div>
    </div>
  );
}


// This function gets called at build time
export function getStaticProps() {
  const questions = [
    {
      question: 'What is the CSS box model?',
      answer: 'Every element is made up of Margin, Border, Padding, and Content',
      tag: 'css'
    },
    {
      question: 'What does box-sizing: border-box do?',
      answer: 'when assigning a width or height it will include the padding and border in that calculation',
      tag: 'css'
    },
    {
      question: 'What is event delegation?',
      answer: 'When clicking an element, the click event will travel through elements from outer to inner or from inner to outer and click them. It will travel from outer to inner if capture is set to true. By default it will travel from inner to outer, this is known as bubbling',
      tag: 'javascript'
    },
    {
      question: 'What is a closure?',
      answer: 'A closure is when function can access its lexical scope when executed outside that scope',
      tag: 'javascript'
    },
    {
      question: 'What is the DOM?',
      answer: 'The Document Object Model is a representation of the HTML that is written. The DOM provides an API that allows JavaScript to manipulate it.',
      tag: 'html'
    },
    {
      question: 'How does this in JavaScript work?',
      answer: '"this" is set when a function is called, to find out what value it holds you have to look at where it is called. For example, if a function is called on the global scope "this" will be the Window object in non-strict mode otherwise it will be undefined. "this" can be bounded by using bind, apply or call.',
      tag: 'javascript'
    },
    {
      question: 'Explain how prototypal inheritance works',
      answer: 'prototypal inheritance is when an object is linked to another object. An object can retrieve any values from the object it is linked with.',
      tag: 'javascript'
    },
    {
      question: 'What is the difference between a variable that is null, undefined or undeclared',
      answer: 'when a variable is null it means that it has no value currently. when a variable is undefined it means it was declared but not initialize with a value. When a variable is undeclared it means that the variable was used before initializing or declaring with var or let.',
      tag: 'javascript'
    },
    {
      question: 'How to check if a variable is null, undefined or undeclared',
      answer: 'To check for null you could do null === null. When strictly comparing null to itself it will be true. When comparing it with a different value it will be false. when checking for undefined you can do undefined === undefined. When checking for an undeclared variable you can try using it, an error should be thrown.',
      tag: 'javascript'
    },
    {
      question: 'What is REST',
      answer: 'Representational State Transfer is the idea of being stateless and separation of the client and server. This means that the server and client can run on there own and a resource can be fetched without having to have any knowledge about the client or server. The 4 HTTP requests that are used to fetch resources/data from the server are GET, POST, PUT, and DELETE requests. A GET request is used to retrieve data, a POST request is used to create data. A PUT request is used to update data, and a DELETE request is used to delete data. When making a request the path needs to be clear on what it is trying to do.',
      tag: 'javascript'
    },
    {
      question: 'What is doctype',
      answer: 'The doctype tells the browser what version of HTML is being used.',
      tag: 'html'
    },
    {
      question: 'What is the difference between == vs ===',
      answer: 'When comparing values triple equal will not allow coercion. Double equal does allow coercion.',
      tag: 'javascript'
    },
    {
      question: 'What is hoisting',
      answer: 'hoisting is the idea that all declarations are moved to the top of the scope. For Example, you could use a function before it is defined as long as it was defined somewhere in that scope.',
      tag: 'javascript'
    },
    {
      question: 'What is coercion?',
      answer: 'Coercion is when the type of a value is changed from one to another.',
      tag: 'javascript'
    },
    {
      question: 'how to check if a value is NaN',
      answer: 'The Number.isNaN() method is used to check if is NaN. You could also compare it to itself because it is the only value that is not equal to itself',
      tag: 'javascript'
    },
    {
      question: 'Why is it a good idea to leave the global scope namespace empty?',
      answer: 'It is a good idea to not define variables in the global scope because the global scope is shared among different JavaScript files. This will make it likely lead to the same name collisions.',
      tag: 'javascript'
    },
    {
      question: 'What is a IIFE?',
      answer: 'An immediately invoked function expression is a function that is run as soon as it is defined. It is used to not pollute the global scope. Often an object is returned to be able to access values inside the function scope outside it.',
      tag: 'javascript'
    },
    {
      question: 'Why do you think React is good for creating UIs',
      answer: 'React allows the website to be separated into components. This makes it easier to create and make changes because all related code will be together.',
      tag: 'javascript'
    },
    {
      question: 'What is JavaScript?',
      answer: 'JavaScript is a language that adds interactivity to the browser. For example, somebody could input a number into a form and get that number back multiplied by 2.',
      tag: 'javascript'
    }
  ]

  return {
    props: {
      questions
    },
  }
}
