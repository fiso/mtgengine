"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtisanofKozilek extends UnimplementedCard {
  constructor(game) {
    super(game, "Artisan of Kozilek", "Archenemy", "ARC");
  }
}

module.exports = ArtisanofKozilek;
