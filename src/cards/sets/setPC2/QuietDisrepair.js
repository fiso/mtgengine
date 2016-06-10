"use strict";
const Constants = require ("../../../Constants");
const QuietDisrepairBase = require("../setFUT/QuietDisrepair");

class QuietDisrepair extends QuietDisrepairBase {
  constructor (game) {
    super(game, "Quiet Disrepair", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = QuietDisrepair;
