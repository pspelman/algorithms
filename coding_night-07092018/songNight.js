class Automobile {
    constructor() {
        this.max_speed = null;
        this.weight = null;
    }

    goForward() {
        console.log(`trying to go forward`,);
    }

    goBackward() {
        console.log(`trying to go backward`,);
    }
}

class Car extends Automobile{
    constructor() {
        super();
        this.hasSeatbelts = null;
    }
}


class Motorcycle extends Automobile{
    constructor() {
        super();
    }
}


const car1 = new Car();

car1.goForward();






















// class Machines {
//     constructor() {
//
//     }
//     playsong() {
//         console.log(`playing: `, this.queue.pop());
//     }
// }
//
//
// class Jukebox extends Machines {
//
//     constructor() {
//         super();
//         this.songbook = [];
//         this.queue = [];
//
//     }
//
//     addsong(song) {
//         console.log(`adding song to queue: `, song.title);
//         this.queue.unshift(song);
//     }
//
// }
//
//
// class Song {
//     constructor(artist, title) {
//         this.artist = artist;
//         this.title = title;
//     }
// }
// const jukebox_one = new Jukebox();
//
// jukebox_one.addsong(new Song("Some Artist", "walking downtown"));
// jukebox_one.addsong(new Song("Some Other Artist", "running in the city"));
//
// jukebox_one.playsong();
// jukebox_one.playsong();
