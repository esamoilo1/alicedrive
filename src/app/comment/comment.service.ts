import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';




@Injectable()
export class CommentService {
	constructor(private http:Http) {

     }

     
    getComments(){
        
       return this.http.get("https://alice-drive-5a031.firebaseio.com")
       .map((response:Response)=> response.json());
       
    }


    addComment(commentName: string, commentComment: string) {
	     const data = {
           name: commentName,
           comment : commentComment
         };
	    return this.http.post("https://alice-drive-5a031.firebaseio.com/",data)
       .map((response: Response ) => response.json());
      }

    deleteComment(comment: any) {
	    return this.http.delete(`https://localhost:3000/comments/${comment.id}`)
        .map((response: Response ) => response.json());

    }
}
