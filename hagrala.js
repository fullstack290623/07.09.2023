
const game = new Game()

function try_guess() {
    const guess = parseInt(document.getElementById('number_txt').value)
    game.check_guess(guess)
}