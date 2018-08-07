"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrashingBoars extends UnimplementedCard {
  constructor (game) {
    super(game, "Crashing Boars", "Tempest Remastered", "TPR");
  }
}

module.exports = CrashingBoars;
