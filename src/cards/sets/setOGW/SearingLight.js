"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Light", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SearingLight;
