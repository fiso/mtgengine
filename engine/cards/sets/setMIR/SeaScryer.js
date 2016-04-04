"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaScryer extends Card {
  constructor(game) {
    super(game, "Sea Scryer", "Mirage", "MIR");
  }
}

module.exports = SeaScryer;
