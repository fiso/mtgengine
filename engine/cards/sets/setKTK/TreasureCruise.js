"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasureCruise extends Card {
  constructor(game) {
    super(game, "Treasure Cruise", "Khans of Tarkir", "KTK");
  }
}

module.exports = TreasureCruise;
