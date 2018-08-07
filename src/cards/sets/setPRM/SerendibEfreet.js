"use strict";
const Constants = require ("../../../Constants");
const SerendibEfreetBase = require("../setEMA/SerendibEfreet");

class SerendibEfreet extends SerendibEfreetBase {
  constructor (game) {
    super(game, "Serendib Efreet", "Magic Online Promos", "PRM");
  }
}

module.exports = SerendibEfreet;
