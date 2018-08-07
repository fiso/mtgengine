"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Summon the Pack", "Unstable", "UST");
  }
}

module.exports = SummonthePack;
