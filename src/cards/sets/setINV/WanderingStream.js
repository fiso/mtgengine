"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingStream extends UnimplementedCard {
  constructor(game) {
    super(game, "Wandering Stream", "Invasion", "INV");
  }
}

module.exports = WanderingStream;
