"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderousWrath extends Card {
  constructor(game) {
    super(game, "Thunderous Wrath", "Avacyn Restored", "AVR");
  }
}

module.exports = ThunderousWrath;
