import { Item } from './item';
import { Friend } from './friend';

export interface List {
    id?: string,
    title: string,
    items: Array<Item>,
    owner: string,
    date: Date,
    friends?: Array<string>
}