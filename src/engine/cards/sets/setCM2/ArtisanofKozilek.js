"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtisanofKozilek extends UnimplementedCard {
  constructor (game) {
    super(game, "Artisan of Kozilek", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ArtisanofKozilek;
