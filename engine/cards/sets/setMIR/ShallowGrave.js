"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShallowGrave extends Card {
  constructor(game) {
    super(game, "Shallow Grave", "Mirage", "MIR");
  }
}

module.exports = ShallowGrave;
