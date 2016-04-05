"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmobilizingInk extends UnimplementedCard {
  constructor(game) {
    super(game, "Immobilizing Ink", "Odyssey", "ODY");
  }
}

module.exports = ImmobilizingInk;
