"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverbladePaladin extends Card {
  constructor(game) {
    super(game, "Silverblade Paladin", "Avacyn Restored", "AVR");
  }
}

module.exports = SilverbladePaladin;
