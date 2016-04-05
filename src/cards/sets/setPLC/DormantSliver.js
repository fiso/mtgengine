"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DormantSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Dormant Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = DormantSliver;
