"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MangarasBlessing extends Card {
  constructor(game) {
    super(game, "Mangara's Blessing", "Mirage", "MIR");
  }
}

module.exports = MangarasBlessing;
