"use strict";
const Constants = require ("../../../Constants");
const KillerBeesBase = require("../set5ED/KillerBees");

class KillerBees extends KillerBeesBase {
  constructor (game) {
    super(game, "Killer Bees", "Fourth Edition", "4ED");
  }
}

module.exports = KillerBees;
