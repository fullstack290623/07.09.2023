class Game  {
    constructor() {
        this.luck_number = Math.floor(Math.random() * 100) + 1
    }
    check_guess(guess) {
        if (guess > this.luck_number) {
            alert('Lower')
        }
        else if (guess < this.luck_number) {
            alert('higher')
        }
        else {
            alert('WON !!')
        }
    }
}