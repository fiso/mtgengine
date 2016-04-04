"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crypsis extends Card {
  constructor(game) {
    super(game, "Crypsis", "Born of the Gods", "BNG");
  }
}

module.exports = Crypsis;
