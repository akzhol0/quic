import { useState } from 'react';
import Bar from './assets/Components/Bar';
import Modal from './assets/Components/Modal';
import Result from './assets/Components/Result';
import './assets/styles/global.css';
import './assets/styles/reset.css';
import './assets/styles/media/media.css'

function App() {
  const questions = [
    {
        title: 'What is ReactJS?',
        variations: ['Open-source JS library' , 'JS Framework', 'Programming language'],
        correct: 0
    },
    {
      title: "What's the command to create a React project",
      variations: ['npx create-react-app' , 'npx create-app', 'npm download react'],
      correct: 0
    },
    {
      title: 'What command will start local dev server?',
      variations: ['bro pls start' , 'npm start', 'go go go'],
      correct: 1
    },
    {
      title: "What's the default local host port for React dev server uses?",
      variations: ['3200' , '5000', '3000'],
      correct: 2
    },
    {
      title: 'Which keyword creates a constant in JavaScript?',
      variations: ['var' , 'const', 'idk'],
      correct: 1
    },

  ];

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const check = (index) => {
    setStep(step + 1)
    index === questions[step].correct && setCorrect(correct + 1);
  }
  return (
    <div className="wrapper">
      <section>
        {step != questions.length ? (
        <Modal check={check} step={step} question={questions[step]}/>
        ) : (
        <Result correct={correct} length={questions.length} />)}
        <Bar step={step} length={questions.length} />
      </section>
    </div>
  );
}

export default App;
