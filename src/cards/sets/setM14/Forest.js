"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Forest;
