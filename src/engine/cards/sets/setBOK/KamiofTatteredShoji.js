"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofTatteredShoji extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of Tattered Shoji", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KamiofTatteredShoji;
