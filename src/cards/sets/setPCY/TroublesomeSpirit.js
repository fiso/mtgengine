"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TroublesomeSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Troublesome Spirit", "Prophecy", "PCY");
  }
}

module.exports = TroublesomeSpirit;
