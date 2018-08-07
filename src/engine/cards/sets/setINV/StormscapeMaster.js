"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormscapeMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormscape Master", "Invasion", "INV");
  }
}

module.exports = StormscapeMaster;
