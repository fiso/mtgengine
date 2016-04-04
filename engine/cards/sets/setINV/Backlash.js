"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Backlash extends Card {
  constructor(game) {
    super(game, "Backlash", "Invasion", "INV");
  }
}

module.exports = Backlash;
