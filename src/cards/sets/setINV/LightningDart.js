"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningDart extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Dart", "Invasion", "INV");
  }
}

module.exports = LightningDart;
