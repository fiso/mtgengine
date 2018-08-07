"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagneticTheft extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnetic Theft", "Fifth Dawn", "5DN");
  }
}

module.exports = MagneticTheft;
