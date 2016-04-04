"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarbleDiamondBase = require("../set6ED/MarbleDiamond.js");

class MarbleDiamond extends MarbleDiamondBase {
  constructor(game) {
    super(game, "Marble Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = MarbleDiamond;
