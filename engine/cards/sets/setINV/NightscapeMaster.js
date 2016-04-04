"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightscapeMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightscape Master", "Invasion", "INV");
  }
}

module.exports = NightscapeMaster;
