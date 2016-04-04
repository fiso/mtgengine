"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureCruise extends UnimplementedCard {
  constructor(game) {
    super(game, "Treasure Cruise", "Khans of Tarkir", "KTK");
  }
}

module.exports = TreasureCruise;
