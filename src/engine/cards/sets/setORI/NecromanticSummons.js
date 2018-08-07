"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromanticSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromantic Summons", "Magic Origins", "ORI");
  }
}

module.exports = NecromanticSummons;
