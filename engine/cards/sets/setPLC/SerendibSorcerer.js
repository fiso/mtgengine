"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerendibSorcerer extends UnimplementedCard {
  constructor(game) {
    super(game, "Serendib Sorcerer", "Planar Chaos", "PLC");
  }
}

module.exports = SerendibSorcerer;
