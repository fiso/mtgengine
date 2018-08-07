"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentGravestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Gravestone", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = SilentGravestone;
