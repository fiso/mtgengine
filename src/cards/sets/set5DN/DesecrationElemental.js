"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesecrationElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Desecration Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = DesecrationElemental;
