"use strict";
const Constants = require ("../../../Constants");
const BloodhallPriestBase = require("../setEMN/BloodhallPriest");

class BloodhallPriest extends BloodhallPriestBase {
  constructor (game) {
    super(game, "Bloodhall Priest", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = BloodhallPriest;
