"use strict";
const Constants = require ("../../../Constants");
const QuietDisrepairBase = require("../setPCA/QuietDisrepair");

class QuietDisrepair extends QuietDisrepairBase {
  constructor (game) {
    super(game, "Quiet Disrepair", "Planechase 2012", "PC2");
  }
}

module.exports = QuietDisrepair;
