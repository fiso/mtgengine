"use strict";
const Constants = require ("../../../Constants");
const FieryHellhoundBase = require("../setORI/FieryHellhound");

class FieryHellhound extends FieryHellhoundBase {
  constructor (game) {
    super(game, "Fiery Hellhound", "Magic 2011", "M11");
  }
}

module.exports = FieryHellhound;
