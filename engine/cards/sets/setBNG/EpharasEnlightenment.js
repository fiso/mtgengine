"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpharasEnlightenment extends Card {
  constructor(game) {
    super(game, "Ephara's Enlightenment", "Born of the Gods", "BNG");
  }
}

module.exports = EpharasEnlightenment;
