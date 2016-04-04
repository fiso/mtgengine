"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireDiamondBase = require("../set6ED/FireDiamond.js");

class FireDiamond extends FireDiamondBase {
  constructor(game) {
    super(game, "Fire Diamond", "Commander 2014", "C14");
  }
}

module.exports = FireDiamond;
