"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirefistStriker extends Card {
  constructor(game) {
    super(game, "Firefist Striker", "Gatecrash", "GTC");
  }
}

module.exports = FirefistStriker;
