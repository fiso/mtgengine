"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingBeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Beam", "Modern Masters", "MMA");
  }
}

module.exports = BlindingBeam;
