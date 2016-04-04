"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CreatureBondBase = require("../setCED/CreatureBond.js");

class CreatureBond extends CreatureBondBase {
  constructor(game) {
    super(game, "Creature Bond", "Fourth Edition", "4ED");
  }
}

module.exports = CreatureBond;
