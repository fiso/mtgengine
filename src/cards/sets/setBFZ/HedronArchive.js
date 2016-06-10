"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronArchive extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedron Archive", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HedronArchive;
