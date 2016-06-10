"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverbladePaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Silverblade Paladin", "Avacyn Restored", "AVR");
  }
}

module.exports = SilverbladePaladin;
