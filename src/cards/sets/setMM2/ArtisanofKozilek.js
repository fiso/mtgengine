"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setARC/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ArtisanofKozilek;
