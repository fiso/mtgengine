"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullmeadCauldron extends Card {
  constructor(game) {
    super(game, "Skullmead Cauldron", "Dissension", "DIS");
  }
}

module.exports = SkullmeadCauldron;
