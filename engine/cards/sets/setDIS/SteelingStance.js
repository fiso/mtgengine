"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelingStance extends Card {
  constructor(game) {
    super(game, "Steeling Stance", "Dissension", "DIS");
  }
}

module.exports = SteelingStance;
