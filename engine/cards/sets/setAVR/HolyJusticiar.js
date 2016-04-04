"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HolyJusticiar extends Card {
  constructor(game) {
    super(game, "Holy Justiciar", "Avacyn Restored", "AVR");
  }
}

module.exports = HolyJusticiar;
