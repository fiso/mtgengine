"use strict";
const Constants = require ("../../../Constants");
const CrimsonManticoreBase = require("../set5ED/CrimsonManticore");

class CrimsonManticore extends CrimsonManticoreBase {
  constructor(game) {
    super(game, "Crimson Manticore", "Fourth Edition", "4ED");
  }
}

module.exports = CrimsonManticore;
