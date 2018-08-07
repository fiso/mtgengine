"use strict";
const Constants = require ("../../../Constants");
const SerendibEfreetBase = require("../setEMA/SerendibEfreet");

class SerendibEfreet extends SerendibEfreetBase {
  constructor (game) {
    super(game, "Serendib Efreet", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = SerendibEfreet;
