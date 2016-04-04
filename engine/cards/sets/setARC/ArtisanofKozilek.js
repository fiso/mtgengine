"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtisanofKozilek extends Card {
  constructor(game) {
    super(game, "Artisan of Kozilek", "Archenemy", "ARC");
  }
}

module.exports = ArtisanofKozilek;
