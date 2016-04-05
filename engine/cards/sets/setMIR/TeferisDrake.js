"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Teferi's Drake", "Mirage", "MIR");
  }
}

module.exports = TeferisDrake;
