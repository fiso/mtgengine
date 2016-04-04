"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamiofTatteredShoji extends Card {
  constructor(game) {
    super(game, "Kami of Tattered Shoji", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KamiofTatteredShoji;
