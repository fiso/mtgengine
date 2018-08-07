"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureCruise extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Cruise", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = TreasureCruise;
