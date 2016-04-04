"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HerosDownfallBase = require("../setCPK/HerosDownfall.js");

class HerosDownfall extends HerosDownfallBase {
  constructor(game) {
    super(game, "Hero's Downfall", "Theros", "THS");
  }
}

module.exports = HerosDownfall;
