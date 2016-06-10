"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Fourth Edition", "4ED");
  }
}

module.exports = Terror;
