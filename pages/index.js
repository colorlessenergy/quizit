import Head from 'next/head';

import classes from './Home.module.css';

export default function Home({ questions }) {

  function displayAnswer(ev) {
    return ev.currentTarget.querySelector('p').classList.toggle(classes['hidden']);
  }

  let displayQuestions = questions.map(function ({question, answer}, index) {
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

      <h1>
        quiz it
      </h1>

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
      answer: 'Every element is made up of Margin, Border, Padding, and Content'
    },
    {
      question: 'What does box-sizing: border-box do?',
      answer: 'when assigning a width or height it will include the padding and border in that calculation'
    },
    {
      question: 'What is event delegation?',
      answer: 'When clicking an element, the click event will travel through elements from outer to inner or from inner to outer and click them. It will travel from outer to inner if capture is set to true. By default it will travel from inner to outer, this is known as bubbling'
    },
    {
      question: 'What is a closure?',
      answer: 'A closure is when function can access its lexical scope when executed outside that scope'
    },
    {
      question: 'What is the DOM?',
      answer: 'The Document Object Model is a representation of the HTML that is written. The DOM provides an API that allows JavaScript to manipulate it.'
    }
  ]

  return {
    props: {
      questions
    },
  }
}
