"use strict";
const Constants = require ("../../../Constants");
const FieryHellhoundBase = require("../setDDI/FieryHellhound");

class FieryHellhound extends FieryHellhoundBase {
  constructor(game) {
    super(game, "Fiery Hellhound", "Magic Origins", "ORI");
  }
}

module.exports = FieryHellhound;
