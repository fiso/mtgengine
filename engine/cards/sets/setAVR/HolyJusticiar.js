"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyJusticiar extends UnimplementedCard {
  constructor(game) {
    super(game, "Holy Justiciar", "Avacyn Restored", "AVR");
  }
}

module.exports = HolyJusticiar;
