"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setME4/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Mirrodin", "MRD");
  }
}

module.exports = Terror;
