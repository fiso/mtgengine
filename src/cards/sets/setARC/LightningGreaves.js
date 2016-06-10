"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningGreaves extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Greaves", "Archenemy", "ARC");
  }
}

module.exports = LightningGreaves;
