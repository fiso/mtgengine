"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyArc extends UnimplementedCard {
  constructor(game) {
    super(game, "Energy Arc", "Alliances", "ALL");
  }
}

module.exports = EnergyArc;
