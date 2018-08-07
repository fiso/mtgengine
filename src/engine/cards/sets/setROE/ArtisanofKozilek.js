"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setCM2/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ArtisanofKozilek;
