"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlasmaElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Plasma Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = PlasmaElemental;
