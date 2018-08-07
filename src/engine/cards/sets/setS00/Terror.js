"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setME4/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Starter 2000", "S00");
  }
}

module.exports = Terror;
