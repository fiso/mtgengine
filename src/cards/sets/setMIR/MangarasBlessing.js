"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MangarasBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Mangara's Blessing", "Mirage", "MIR");
  }
}

module.exports = MangarasBlessing;
