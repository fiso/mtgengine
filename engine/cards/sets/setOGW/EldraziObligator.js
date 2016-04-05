"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziObligator extends UnimplementedCard {
  constructor(game) {
    super(game, "Eldrazi Obligator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziObligator;
