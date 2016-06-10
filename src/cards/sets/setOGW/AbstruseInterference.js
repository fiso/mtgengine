"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbstruseInterference extends UnimplementedCard {
  constructor (game) {
    super(game, "Abstruse Interference", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AbstruseInterference;
