"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaterspoutDjinnBase = require("../setDD3_JVC/WaterspoutDjinn.js");

class WaterspoutDjinn extends WaterspoutDjinnBase {
  constructor(game) {
    super(game, "Waterspout Djinn", "Visions", "VIS");
  }
}

module.exports = WaterspoutDjinn;
