export interface Card {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface Question {
  question: string;
  answer: string;
}
