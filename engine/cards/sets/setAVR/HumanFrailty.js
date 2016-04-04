"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HumanFrailty extends Card {
  constructor(game) {
    super(game, "Human Frailty", "Avacyn Restored", "AVR");
  }
}

module.exports = HumanFrailty;
