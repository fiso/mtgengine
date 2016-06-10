"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrashingBoars extends UnimplementedCard {
  constructor (game) {
    super(game, "Crashing Boars", "Beatdown Box Set", "BTD");
  }
}

module.exports = CrashingBoars;
