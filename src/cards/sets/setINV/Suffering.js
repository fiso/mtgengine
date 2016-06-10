"use strict";
const Constants = require ("../../../Constants");
const SufferingBase = require("../setDDH/Suffering");

class Suffering extends SufferingBase {
  constructor (game) {
    super(game, "Suffering", "Invasion", "INV");
  }
}

module.exports = Suffering;
