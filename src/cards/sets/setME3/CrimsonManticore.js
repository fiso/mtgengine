"use strict";
const Constants = require ("../../../Constants");
const CrimsonManticoreBase = require("../set5ED/CrimsonManticore");

class CrimsonManticore extends CrimsonManticoreBase {
  constructor (game) {
    super(game, "Crimson Manticore", "Masters Edition III", "ME3");
  }
}

module.exports = CrimsonManticore;
