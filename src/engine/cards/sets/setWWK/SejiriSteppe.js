"use strict";
const Constants = require ("../../../Constants");
const SejiriSteppeBase = require("../setDDG/SejiriSteppe");

class SejiriSteppe extends SejiriSteppeBase {
  constructor (game) {
    super(game, "Sejiri Steppe", "Worldwake", "WWK");
  }
}

module.exports = SejiriSteppe;
