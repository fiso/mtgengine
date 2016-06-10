"use strict";
const Constants = require ("../../../Constants");
const DrownedBase = require("../setME4/Drowned");

class Drowned extends DrownedBase {
  constructor (game) {
    super(game, "Drowned", "The Dark", "DRK");
  }
}

module.exports = Drowned;
