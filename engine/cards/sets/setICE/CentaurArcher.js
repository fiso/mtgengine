"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurArcher extends Card {
  constructor(game) {
    super(game, "Centaur Archer", "Ice Age", "ICE");
  }
}

module.exports = CentaurArcher;
