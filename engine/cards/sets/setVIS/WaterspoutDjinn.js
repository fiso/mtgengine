"use strict";
const Constants = require ("../../../Constants");
const WaterspoutDjinnBase = require("../setDD3_JVC/WaterspoutDjinn");

class WaterspoutDjinn extends WaterspoutDjinnBase {
  constructor(game) {
    super(game, "Waterspout Djinn", "Visions", "VIS");
  }
}

module.exports = WaterspoutDjinn;
