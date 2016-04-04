"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedShocker extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbed Shocker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BarbedShocker;
