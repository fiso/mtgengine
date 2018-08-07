"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlayedNim extends UnimplementedCard {
  constructor (game) {
    super(game, "Flayed Nim", "Mirrodin", "MRD");
  }
}

module.exports = FlayedNim;
