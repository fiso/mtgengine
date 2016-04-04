"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KjeldoranFrostbeast extends Card {
  constructor(game) {
    super(game, "Kjeldoran Frostbeast", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranFrostbeast;
