"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SidarKondo extends UnimplementedCard {
  constructor (game) {
    super(game, "Sidar Kondo", "Vanguard Series", "PVAN");
  }
}

module.exports = SidarKondo;
