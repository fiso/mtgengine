"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrystalRodBase = require("../set6ED/CrystalRod.js");

class CrystalRod extends CrystalRodBase {
  constructor(game) {
    super(game, "Crystal Rod", "Unlimited Edition", "2ED");
  }
}

module.exports = CrystalRod;
