"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Witch Engine", "Urza's Saga", "USG");
  }
}

module.exports = WitchEngine;
