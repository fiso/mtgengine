"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscapeMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunscape Master", "Invasion", "INV");
  }
}

module.exports = SunscapeMaster;
