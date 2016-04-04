"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CreatureBondBase = require("../setCED/CreatureBond.js");

class CreatureBond extends CreatureBondBase {
  constructor(game) {
    super(game, "Creature Bond", "International Collector's Edition", "CEI");
  }
}

module.exports = CreatureBond;
