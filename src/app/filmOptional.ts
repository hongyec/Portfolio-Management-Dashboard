console.log(`
------------------------------------------
   starting Part B Optional Review classes
   with inheritance
------------------------------------------
`)

abstract class Review {

    constructor(protected _score: number) {}

    public get score() : number {
        return this._score;
    }

    toString(): string {
        return `Score: ${this._score}`;
    }
}

class BriefReview extends Review {

    constructor(score: number, private comment: string) {
        super(score);
    }

    toString() {
        return `Brief review: ${super.toString()} | Comment: ${this.comment}`;
    }
}

class CriticalReview extends Review {

    private observations: string[];

    constructor(score: number, private mediaOutlet: string, ...observations: string[]) {
        super(score);
        this.observations = observations;
    }

    toString() {
        return `Critical review: ${super.toString()} | Media Outlet: ${this.mediaOutlet} | Observations: ${this.observations.join(",")}`;
    }
}


class FilmOpt {

    private static nextId: number = 0;
    private static readonly MIN_RATING: number = 0;
    private static readonly MAX_RATING: number = 5;

    private id: number;
    private genres: string[] = [];
    private reviews: Review[] = [];

    constructor(
        private title: string,
        private blurb: string,
        private price: number) {

        this.id = FilmOpt.nextId++;
    }

    addGenres(...genres: string[]) : void {
        for (let genre of genres) {
          this.genres.push(genre);
        }
    }

    review(review: Review) : void {
        this.reviews.push(review);
    }

    genresAsString() : string {
        return this.genres.join(' ');
    }

    averageScore() : number {
        let total: number = 0;
        for (let review of this.reviews) {
            total += review.score;
        }
        return total / this.reviews.length;
    }

    reviewsAsString() : string {
        let str: string = '';
        for (let review of this.reviews) {
            str += review.toString() + '\n';
        }
        return str;
    }

    toString() : string {
        return `[${this.id}] ${this.title}, ${this.blurb}, �${this.price}, [genres ${this.genresAsString()}], [ratings ${this.genresAsString()}] average score ${this.averageScore()}`;
    }
}

// Client code.
// let review1 = new Review(5)    // cannot instantiate an abstract class

let filmOpt = new FilmOpt(
    'Spectre',
    'Bond is back in a frantic battle against his classic foe and his white cat',
    8.99);

  filmOpt.review(new BriefReview(5, 'Great film'));
  filmOpt.review(new CriticalReview(4, 'Daily Mail', 'Great action sequences', 'Daniel Craig looking a bit old now'));
  filmOpt.review(new CriticalReview(5, 'The Sun', 'Nice cat', 'Great scenery'));
  filmOpt.review(new BriefReview(3, 'I prefer Bourne'));

console.log(filmOpt.reviewsAsString());
