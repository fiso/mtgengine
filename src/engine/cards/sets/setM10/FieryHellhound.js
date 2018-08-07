"use strict";
const Constants = require ("../../../Constants");
const FieryHellhoundBase = require("../setORI/FieryHellhound");

class FieryHellhound extends FieryHellhoundBase {
  constructor (game) {
    super(game, "Fiery Hellhound", "Magic 2010", "M10");
  }
}

module.exports = FieryHellhound;
