"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ashnod extends Card {
  constructor(game) {
    super(game, "Ashnod", "Vanguard", "VAN");
  }
}

module.exports = Ashnod;
