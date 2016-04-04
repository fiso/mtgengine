"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thirst extends Card {
  constructor(game) {
    super(game, "Thirst", "Mirage", "MIR");
  }
}

module.exports = Thirst;
