"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setCM2/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ArtisanofKozilek;
