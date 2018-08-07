"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setCM2/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Friday Night Magic 2011", "F11");
  }
}

module.exports = ArtisanofKozilek;
