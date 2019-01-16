export class PostEntity {
  userId: number;
  id: number;
  title: string;
  body: string;

  static fromJson(obj: object): PostEntity {
    const newEntity = new PostEntity();

    if (obj.hasOwnProperty('userId')) {
      newEntity.userId = Number(obj['userId']);
    }

    if (obj.hasOwnProperty('id')) {
      newEntity.id = Number(obj['id']);
    }

    if (obj.hasOwnProperty('title')) {
      newEntity.title = obj['title'];
    }

    if (obj.hasOwnProperty('body')) {
      newEntity.body = obj['body'];
    }

    return newEntity;
  }
}
