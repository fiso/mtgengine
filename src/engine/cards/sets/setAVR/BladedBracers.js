"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladedBracers extends UnimplementedCard {
  constructor (game) {
    super(game, "Bladed Bracers", "Avacyn Restored", "AVR");
  }
}

module.exports = BladedBracers;
