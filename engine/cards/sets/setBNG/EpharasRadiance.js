"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpharasRadiance extends Card {
  constructor(game) {
    super(game, "Ephara's Radiance", "Born of the Gods", "BNG");
  }
}

module.exports = EpharasRadiance;
