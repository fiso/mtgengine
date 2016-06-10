"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderscapeMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunderscape Master", "Invasion", "INV");
  }
}

module.exports = ThunderscapeMaster;
