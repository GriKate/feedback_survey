export interface State {
    data: {
      rating: number | null;
      questions: object[];
    };
    isDone: boolean;
  }