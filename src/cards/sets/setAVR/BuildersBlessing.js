"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuildersBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Builder's Blessing", "Avacyn Restored", "AVR");
  }
}

module.exports = BuildersBlessing;
