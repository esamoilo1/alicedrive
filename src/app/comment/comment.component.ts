
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
  commenten: Observable<any[]>;
  commentValue ='';

  constructor(public db: AngularFireDatabase, private commentService: CommentService) {
    this.commenten  = db.list('comments').valueChanges();
    this.isInvalid = false;
    this.loadComments();
  }

    loadComments() {
      this.commenten  = this.db.list('comments').valueChanges();

      this.commentService
      .getComments()
      .subscribe(user =>this.response =JSON.stringify(user)); 

   }
   addComment(form: NgForm) {
    this.db.list('/comments').push({content:this.commentValue});
    this.commentValue = '';
    console.log(form.value);
    if (form.value.name === '' || form.value.comment === '' || form.value.name === undefined || form.value.comment === undefined) {
      console.log(form);

      this.isInvalid = true;
      return false;
    } else {
      console.log(this.response);

      this.commentService.addComment(this.commentName, this.commentComment)
        .subscribe(user =>this.response =JSON.stringify(user)); 
        console.log(this.response);

        }
        console.log(this.response);

    
   }
   deleteComment(comment: Comment) {
    this.commentService.deleteComment(comment)
      .subscribe((data) => {
        this.comments = this.comments.filter(c => c.id !== comment.id);
      });
      }
}
