"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanFrailty extends UnimplementedCard {
  constructor(game) {
    super(game, "Human Frailty", "Avacyn Restored", "AVR");
  }
}

module.exports = HumanFrailty;
