"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZealousStrike extends Card {
  constructor(game) {
    super(game, "Zealous Strike", "Avacyn Restored", "AVR");
  }
}

module.exports = ZealousStrike;
