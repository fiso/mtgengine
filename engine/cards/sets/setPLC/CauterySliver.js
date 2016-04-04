"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CauterySliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Cautery Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = CauterySliver;
