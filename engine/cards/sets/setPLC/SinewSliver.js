"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinewSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Sinew Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = SinewSliver;
