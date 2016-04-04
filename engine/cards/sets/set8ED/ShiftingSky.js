"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftingSky extends Card {
  constructor(game) {
    super(game, "Shifting Sky", "Eighth Edition", "8ED");
  }
}

module.exports = ShiftingSky;
