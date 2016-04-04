"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hanna extends Card {
  constructor(game) {
    super(game, "Hanna", "Vanguard", "VAN");
  }
}

module.exports = Hanna;
