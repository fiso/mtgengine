"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecroticSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Necrotic Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = NecroticSliver;
