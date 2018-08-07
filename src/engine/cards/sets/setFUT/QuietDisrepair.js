"use strict";
const Constants = require ("../../../Constants");
const QuietDisrepairBase = require("../setPCA/QuietDisrepair");

class QuietDisrepair extends QuietDisrepairBase {
  constructor (game) {
    super(game, "Quiet Disrepair", "Future Sight", "FUT");
  }
}

module.exports = QuietDisrepair;
