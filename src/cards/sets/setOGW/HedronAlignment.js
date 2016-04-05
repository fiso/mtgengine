"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronAlignment extends UnimplementedCard {
  constructor(game) {
    super(game, "Hedron Alignment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HedronAlignment;
