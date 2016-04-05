"use strict";
const Constants = require ("../../../Constants");
const SerendibEfreetBase = require("../setARN/SerendibEfreet");

class SerendibEfreet extends SerendibEfreetBase {
  constructor(game) {
    super(game, "Serendib Efreet", "Masters Edition", "MED");
  }
}

module.exports = SerendibEfreet;
