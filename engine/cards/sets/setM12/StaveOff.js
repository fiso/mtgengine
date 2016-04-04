"use strict";
const Constants = require ("../../../Constants");
const StaveOffBase = require("../setDDN/StaveOff");

class StaveOff extends StaveOffBase {
  constructor(game) {
    super(game, "Stave Off", "Magic 2012", "M12");
  }
}

module.exports = StaveOff;
