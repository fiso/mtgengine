"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setME4/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = Terror;
