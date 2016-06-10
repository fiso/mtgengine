"use strict";
const Constants = require ("../../../Constants");
const KillerBeesBase = require("../set5ED/KillerBees");

class KillerBees extends KillerBeesBase {
  constructor (game) {
    super(game, "Killer Bees", "Masters Edition III", "ME3");
  }
}

module.exports = KillerBees;
