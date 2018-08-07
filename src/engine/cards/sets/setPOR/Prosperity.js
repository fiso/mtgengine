"use strict";
const Constants = require ("../../../Constants");
const ProsperityBase = require("../setC13/Prosperity");

class Prosperity extends ProsperityBase {
  constructor (game) {
    super(game, "Prosperity", "Portal", "POR");
  }
}

module.exports = Prosperity;
