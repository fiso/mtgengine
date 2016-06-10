"use strict";
const Constants = require ("../../../Constants");
const BatwingBrumeBase = require("../setARC/BatwingBrume");

class BatwingBrume extends BatwingBrumeBase {
  constructor (game) {
    super(game, "Batwing Brume", "Eventide", "EVE");
  }
}

module.exports = BatwingBrume;
