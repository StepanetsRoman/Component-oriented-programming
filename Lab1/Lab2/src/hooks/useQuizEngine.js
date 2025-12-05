import { useCallback, useMemo, useState } from "react";

function shuffleAnswers(answers) {
  const copy = [...answers];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const MOCK_QUESTIONS = [
  // HISTORY
  {
    id: 1,
    category: "history",
    question: "Хто був першим президентом США?",
    answers: [
      { id: "a", text: "Джордж Вашингтон", isCorrect: true },
      { id: "b", text: "Авраам Лінкольн", isCorrect: false },
      { id: "c", text: "Томас Джефферсон", isCorrect: false },
      { id: "d", text: "Бенджамін Франклін", isCorrect: false }
    ]
  },
  {
    id: 2,
    category: "history",
    question: "У якому році відбулася Французька революція, що призвела до падіння монархії?",
    answers: [
      { id: "a", text: "1789", isCorrect: true },
      { id: "b", text: "1812", isCorrect: false },
      { id: "c", text: "1914", isCorrect: false },
      { id: "d", text: "1848", isCorrect: false }
    ]
  },
  {
    id: 3,
    category: "history",
    question: "Яке місто було столицею Київської Русі?",
    answers: [
      { id: "a", text: "Київ", isCorrect: true },
      { id: "b", text: "Новгород", isCorrect: false },
      { id: "c", text: "Чернігів", isCorrect: false },
      { id: "d", text: "Львів", isCorrect: false }
    ]
  },
  {
    id: 4,
    category: "history",
    question: "Хто був гетьманом, що очолив Національно-визвольну війну українського народу середини XVII століття?",
    answers: [
      { id: "a", text: "Богдан Хмельницький", isCorrect: true },
      { id: "b", text: "Іван Мазепа", isCorrect: false },
      { id: "c", text: "Петро Дорошенко", isCorrect: false },
      { id: "d", text: "Пилип Орлик", isCorrect: false }
    ]
  },

  // SCIENCE
  {
    id: 5,
    category: "science",
    question: "Яка планета Сонячної системи найбільша за розміром?",
    answers: [
      { id: "a", text: "Земля", isCorrect: false },
      { id: "b", text: "Юпітер", isCorrect: true },
      { id: "c", text: "Сатурн", isCorrect: false },
      { id: "d", text: "Марс", isCorrect: false }
    ]
  },
  {
    id: 6,
    category: "science",
    question: "Який хімічний елемент має хімічний символ O?",
    answers: [
      { id: "a", text: "Кисень", isCorrect: true },
      { id: "b", text: "Золото", isCorrect: false },
      { id: "c", text: "Срібло", isCorrect: false },
      { id: "d", text: "Олово", isCorrect: false }
    ]
  },
  {
    id: 7,
    category: "science",
    question: "Хто сформулював три закони руху, що стали основою класичної механіки?",
    answers: [
      { id: "a", text: "Ісаак Ньютон", isCorrect: true },
      { id: "b", text: "Альберт Ейнштейн", isCorrect: false },
      { id: "c", text: "Галілео Галілей", isCorrect: false },
      { id: "d", text: "Нікола Тесла", isCorrect: false }
    ]
  },
  {
    id: 8,
    category: "science",
    question: "Який орган людського тіла перекачує кров по всьому організму?",
    answers: [
      { id: "a", text: "Серце", isCorrect: true },
      { id: "b", text: "Легені", isCorrect: false },
      { id: "c", text: "Печінка", isCorrect: false },
      { id: "d", text: "Шлунок", isCorrect: false }
    ]
  },

  // MOVIES
  {
    id: 9,
    category: "movies",
    question: "Хто зіграв головну роль у фільмі «Пірати Карибського моря»?",
    answers: [
      { id: "a", text: "Джонні Депп", isCorrect: true },
      { id: "b", text: "Леонардо Ді Капріо", isCorrect: false },
      { id: "c", text: "Бред Пітт", isCorrect: false },
      { id: "d", text: "Орландо Блум", isCorrect: false }
    ]
  },
  {
    id: 10,
    category: "movies",
    question: "Хто є режисером фільму «Початок» (Inception)?",
    answers: [
      { id: "a", text: "Крістофер Нолан", isCorrect: true },
      { id: "b", text: "Стівен Спілберг", isCorrect: false },
      { id: "c", text: "Джеймс Кемерон", isCorrect: false },
      { id: "d", text: "Рідлі Скотт", isCorrect: false }
    ]
  },
  {
    id: 11,
    category: "movies",
    question: "У якому кінофільмі вперше з'явився персонаж Гаррі Поттер?",
    answers: [
      { id: "a", text: "Гаррі Поттер і філософський камінь", isCorrect: true },
      { id: "b", text: "Гаррі Поттер і таємна кімната", isCorrect: false },
      { id: "c", text: "Гаррі Поттер і в'язень Азкабану", isCorrect: false },
      { id: "d", text: "Гаррі Поттер і келих вогню", isCorrect: false }
    ]
  },
  {
    id: 12,
    category: "movies",
    question: "Який фільм отримав премію «Оскар» за найкращий фільм у 1994 році?",
    answers: [
      { id: "a", text: "Форрест Ґамп", isCorrect: true },
      { id: "b", text: "Втеча з Шоушенка", isCorrect: false },
      { id: "c", text: "Кримінальне чтиво", isCorrect: false },
      { id: "d", text: "Титанік", isCorrect: false }
    ]
  }
];

export function useQuizEngine() {
  const [questions] = useState(() =>
    MOCK_QUESTIONS.map((q) => ({
      ...q,
      answers: shuffleAnswers(q.answers)
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = useMemo(
    () => questions[currentIndex] ?? null,
    [questions, currentIndex]
  );

  const totalQuestions = questions.length;

  const handleAnswer = useCallback(
    (answerId) => {
      const question = currentQuestion;
      if (!question || isFinished) return;

      const selected = question.answers.find((a) => a.id === answerId);
      const isCorrect = Boolean(selected?.isCorrect);

      setAnswersHistory((prev) => [
        ...prev,
        {
          questionId: question.id,
          answerId,
          isCorrect
        }
      ]);

      if (isCorrect) {
        setScore((prev) => prev + 1);
        setCorrectCount((prev) => prev + 1);
        setStreak((prev) => {
          const next = prev + 1;
          setBestStreak((best) => (next > best ? next : best));
          return next;
        });
      } else {
        setStreak(0);
      }

      const isLast = currentIndex + 1 >= totalQuestions;
      if (isLast) {
        setIsFinished(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentQuestion, currentIndex, isFinished, totalQuestions]
  );

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setCorrectCount(0);
    setStreak(0);
    setBestStreak(0);
    setAnswersHistory([]);
    setIsFinished(false);
  }, []);

  return {
    currentQuestion,
    totalQuestions,
    currentIndex,
    score,
    correctCount,
    streak,
    bestStreak,
    isFinished,
    answersHistory,
    handleAnswer,
    resetQuiz
  };
}


