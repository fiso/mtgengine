"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantScorpionBase = require("../setM13/GiantScorpion.js");

class GiantScorpion extends GiantScorpionBase {
  constructor(game) {
    super(game, "Giant Scorpion", "Zendikar", "ZEN");
  }
}

module.exports = GiantScorpion;
