import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'posts'
})
export class Post extends JsonApiModel {

    @Attribute()
    UserId: string;

    @Attribute()
    Id: string;

    @Attribute()
    Title: string;

    @Attribute()
    Body: string;
  
}

@JsonApiModelConfig({
    type: 'comments'
})
export class Comment extends JsonApiModel {

    @Attribute()
    title: string;

    @Attribute()
    created_at: Date;

    @BelongsTo()
    post: Post;

    @BelongsTo()
    user: User;
}

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {

    @Attribute()
    name: string;
    // ...
}