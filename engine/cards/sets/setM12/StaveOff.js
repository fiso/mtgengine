"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaveOffBase = require("../setDDN/StaveOff.js");

class StaveOff extends StaveOffBase {
  constructor(game) {
    super(game, "Stave Off", "Magic 2012", "M12");
  }
}

module.exports = StaveOff;
