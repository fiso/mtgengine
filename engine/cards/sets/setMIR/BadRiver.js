"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BadRiver extends Card {
  constructor(game) {
    super(game, "Bad River", "Mirage", "MIR");
  }
}

module.exports = BadRiver;
