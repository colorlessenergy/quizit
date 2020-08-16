import Head from 'next/head'

export default function Home({ questions }) {
  let displayQuestions = questions.map(function ({question, answer}, index) {
    return (
      <div key={index}>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    )
  })
  return (
    <div>
      <Head>
        <title>quiz it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        quiz it
      </h1>

      <div>
        {displayQuestions}
      </div>
    </div>
  )
}

// This function gets called at build time
export function getStaticProps() {
  const questions = [
    {
      question: 'What is the CSS box model?',
      answer: 'Every element is made up of Margin, Border, Padding, and Content'
    },
    {
      question: 'What is box-sizing: border-box',
      answer: 'when assigning a width or height it will include the padding and border in that calculation'
    }
  ]

  return {
    props: {
      questions
    },
  }
}
