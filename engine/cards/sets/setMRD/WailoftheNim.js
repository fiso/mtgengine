"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WailoftheNim extends UnimplementedCard {
  constructor(game) {
    super(game, "Wail of the Nim", "Mirrodin", "MRD");
  }
}

module.exports = WailoftheNim;
