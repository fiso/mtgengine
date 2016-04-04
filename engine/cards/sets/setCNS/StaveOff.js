"use strict";
const Constants = require ("../../../Constants");
const StaveOffBase = require("../setDDN/StaveOff");

class StaveOff extends StaveOffBase {
  constructor(game) {
    super(game, "Stave Off", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = StaveOff;
