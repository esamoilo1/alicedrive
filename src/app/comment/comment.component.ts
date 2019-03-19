
import {Component, Injectable} from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
   selector: 'app-comment',
   templateUrl: './comment.component.html',
  styles: [`
     .has-error{
      border:1px solid red;
    }

  `
  ]
})
@Injectable()
export class CommentComponent  {
  response:string;
   comments: Comment[];
   commentComment:  '';
   commentName:  '';
  isInvalid:  boolean;
  commenten: {};
  commentValue ='';

  constructor(public db: AngularFireDatabase, private commentService: CommentService) {
    this.getComment();

  }
 getComment(){
  return  this.db.list('/comments').valueChanges()
    .subscribe((data) =>{
      this.commenten = data;
    console.log(this.commenten);
    });
 }
   
   addComment(form: NgForm) {
    this.db.list('/comments').push({comment:form.value.comment,name:form.value.name});
    this.commentValue = '';

    console.log(this.commenten);

   }
   deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment)
      .subscribe((data) => {
        this.comments = this.comments.filter(c => c.id !== comment.id);
      });
      }
}
