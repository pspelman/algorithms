class Jukebox {
    songbook = [];
    queue = [];


    constructor() {
    }

    playsong() {
        console.log(`playing: `, this.queue.pop());
    }

    addsong(song) {
        console.log(`adding song to queue: `, song.title);
        this.queue.unshift(song);
    }


}

export default Jukebox;