"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToxicNim extends UnimplementedCard {
  constructor(game) {
    super(game, "Toxic Nim", "New Phyrexia", "NPH");
  }
}

module.exports = ToxicNim;
