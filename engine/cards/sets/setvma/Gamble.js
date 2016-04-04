"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GambleBase = require("../setUSG/Gamble.js");

class Gamble extends GambleBase {
  constructor(game) {
    super(game, "Gamble", "Vintage Masters", "VMA");
  }
}

module.exports = Gamble;
