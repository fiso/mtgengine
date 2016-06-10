"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phantasmagorian extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmagorian", "Planar Chaos", "PLC");
  }
}

module.exports = Phantasmagorian;
