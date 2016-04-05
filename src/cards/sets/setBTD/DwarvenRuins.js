"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenRuins extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Ruins", "Beatdown Box Set", "BTD");
  }
}

module.exports = DwarvenRuins;
