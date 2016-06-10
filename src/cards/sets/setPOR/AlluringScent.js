"use strict";
const Constants = require ("../../../Constants");
const AlluringScentBase = require("../setME4/AlluringScent");

class AlluringScent extends AlluringScentBase {
  constructor (game) {
    super(game, "Alluring Scent", "Portal", "POR");
  }
}

module.exports = AlluringScent;
