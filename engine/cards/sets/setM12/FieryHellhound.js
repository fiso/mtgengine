"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryHellhoundBase = require("../setDDI/FieryHellhound.js");

class FieryHellhound extends FieryHellhoundBase {
  constructor(game) {
    super(game, "Fiery Hellhound", "Magic 2012", "M12");
  }
}

module.exports = FieryHellhound;
