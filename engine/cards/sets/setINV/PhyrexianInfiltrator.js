"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianInfiltrator extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Infiltrator", "Invasion", "INV");
  }
}

module.exports = PhyrexianInfiltrator;
