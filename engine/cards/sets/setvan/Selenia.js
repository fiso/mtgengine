"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Selenia extends Card {
  constructor(game) {
    super(game, "Selenia", "Vanguard", "VAN");
  }
}

module.exports = Selenia;
