import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      userName: "Ray",
      author: "Mahatma Gandhi",
      saying: "Be the change you wish to see in the world.",
      upvotes: 0,
      downvotes: 0,
      postDate: new Date
    },
    {
      userName: "Purity",
      author: "Oscar Wilde",
      saying: "Be yourself, everyone else is taken.",
      upvotes: 0,
      downvotes: 0,
      postDate:new Date
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
