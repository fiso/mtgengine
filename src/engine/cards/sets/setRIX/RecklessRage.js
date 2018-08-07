"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Rage", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RecklessRage;
