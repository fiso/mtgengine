"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Orim extends Card {
  constructor(game) {
    super(game, "Orim", "Vanguard", "VAN");
  }
}

module.exports = Orim;
