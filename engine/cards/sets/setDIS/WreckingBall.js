"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WreckingBall extends Card {
  constructor(game) {
    super(game, "Wrecking Ball", "Dissension", "DIS");
  }
}

module.exports = WreckingBall;
