"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor(game) {
    super(game, "Terror", "Fifth Edition", "5ED");
  }
}

module.exports = Terror;
