"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CreatureBondBase = require("../setCED/CreatureBond.js");

class CreatureBond extends CreatureBondBase {
  constructor(game) {
    super(game, "Creature Bond", "Unlimited Edition", "2ED");
  }
}

module.exports = CreatureBond;
