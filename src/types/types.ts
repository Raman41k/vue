export interface ITask {
    id: number;
    name: string;
    priority: 'High' | 'Medium' | 'Low';
    done: boolean;
}