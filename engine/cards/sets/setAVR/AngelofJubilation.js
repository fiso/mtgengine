"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofJubilation extends Card {
  constructor(game) {
    super(game, "Angel of Jubilation", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelofJubilation;
