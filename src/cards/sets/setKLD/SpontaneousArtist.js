"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpontaneousArtist extends UnimplementedCard {
  constructor (game) {
    super(game, "Spontaneous Artist", "Kaladesh", "KLD");
  }
}

module.exports = SpontaneousArtist;
