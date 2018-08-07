"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireWinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Winder", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SpireWinder;
