"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TamiyotheMoonSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Tamiyo, the Moon Sage", "Avacyn Restored", "AVR");
  }
}

module.exports = TamiyotheMoonSage;
