import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CommentData implements InMemoryDbService {
  createDb() {
    let comments = [
      { id: 'Маша', name: 'Все было круто' },
      { id: 'Катя', name: 'Вы молодцы' },
    
    ];
    return {comments};
  }
}
