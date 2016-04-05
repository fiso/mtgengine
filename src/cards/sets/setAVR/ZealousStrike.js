"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZealousStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Zealous Strike", "Avacyn Restored", "AVR");
  }
}

module.exports = ZealousStrike;
