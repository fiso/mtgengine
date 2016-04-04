"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Volrath extends Card {
  constructor(game) {
    super(game, "Volrath", "Vanguard", "VAN");
  }
}

module.exports = Volrath;
