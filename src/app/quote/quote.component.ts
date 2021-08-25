import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      name: 'Ray',
      author: 'Mahatma Gandhi',
      saying: 'Be the change you wish to see in the world.',
      description: [1, 1]
    },
    {
      name: 'Purity',
      author: 'Oscar Wilde',
      saying: 'Be yourself, everyone else is taken.',
      description: [0, 0]
    },
    {
      name: 'Cherry',
      author: 'Pablo PIcasso',
      saying: 'Everything you can imagine is real.',
      description: [0, 0]
    }
  ];

  toggleDetails(index:number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() {}

  ngOnInit(): void {}
}
