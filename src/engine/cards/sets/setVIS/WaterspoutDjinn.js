"use strict";
const Constants = require ("../../../Constants");
const WaterspoutDjinnBase = require("../setJVC/WaterspoutDjinn");

class WaterspoutDjinn extends WaterspoutDjinnBase {
  constructor (game) {
    super(game, "Waterspout Djinn", "Visions", "VIS");
  }
}

module.exports = WaterspoutDjinn;
