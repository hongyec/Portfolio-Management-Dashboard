console.log(`
------------------------------------------
   starting Part A Film  classes!
------------------------------------------
`)

class Film {

  private static nextId: number = 0;
  private static readonly MIN_RATING: number = 0;
  private static readonly MAX_RATING: number = 5;

  private id: number;
  private genres: string[] = [];
  private scores: number[] = [];

  constructor(
      private title: string,
      private blurb: string,
      private price: number) {

      this.id = Film.nextId++;
  }

  addGenres(...genres: string[]) : void {
      for (let genre of genres) {
          this.genres.push(genre);
      }
  }

  rate(score: number) : void {
      if (score >= Film.MIN_RATING && score <= Film.MAX_RATING) {
          this.scores.push(score);
      }
  }

  genresAsString() : string {
      return this.genres.join(' ');
  }

  averageScore() : number {
      let total: number = 0;
      for (let score of this.scores) {
          total += score;
      }
      return total / this.scores.length;
  }

  // toString() : string {
  //     return `[${this.id}] ${this.title}, ${this.blurb}, �${this.price}, [genres ${this.genresAsString()}], average score ${this.averageScore()}`;
  // }
  toString()  {
    let scoreStr = 'Scores: ${...this.scores}'
    return (
    `Film: ${this.id}: ${this.title}
     Price: ${this.price}
     Scores: ${this.scores}   Average: ${this.averageScore()}
     Genres: ${this.genresAsString()}`
    )
  }
}

// Client code.
let film = new Film(
      'Spectre',
      'Bond is back in a frantic battle against his classic foe and his white cat',
      8.99);

film.addGenres('action', 'spy');
film.rate(5);
film.rate(4);
film.rate(4);
film.rate(3);
film.rate(7);    // Should be discarded
film.rate(-1);   // Should be discarded

console.log(film.toString());
