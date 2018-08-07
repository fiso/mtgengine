"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setCM2/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Modern Masters 2015", "MM2");
  }
}

module.exports = ArtisanofKozilek;
