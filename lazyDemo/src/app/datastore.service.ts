import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Post } from './post.service';
import { HttpClient } from '@angular/common/http';

const config: DatastoreConfig = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  models: {
    posts: Post
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: HttpClient) {
        super(http);
    }

}