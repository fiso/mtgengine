"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhalanxFormation extends Card {
  constructor(game) {
    super(game, "Phalanx Formation", "Journey into Nyx", "JOU");
  }
}

module.exports = PhalanxFormation;
