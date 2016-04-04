"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireDiamondBase = require("../set6ED/FireDiamond.js");

class FireDiamond extends FireDiamondBase {
  constructor(game) {
    super(game, "Fire Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = FireDiamond;
