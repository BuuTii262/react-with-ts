export default interface User {
  name: string;
  age: number;
  skills: string[];
  onClikIncreaseAge(index: any): void;
}
