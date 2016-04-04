"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImperialSeal extends Card {
  constructor(game) {
    super(game, "Imperial Seal", "Masters Edition II", "ME2");
  }
}

module.exports = ImperialSeal;
