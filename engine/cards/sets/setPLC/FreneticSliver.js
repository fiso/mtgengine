"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreneticSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Frenetic Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = FreneticSliver;
