"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KillerBeesBase = require("../set5ED/KillerBees.js");

class KillerBees extends KillerBeesBase {
  constructor(game) {
    super(game, "Killer Bees", "Fourth Edition", "4ED");
  }
}

module.exports = KillerBees;
