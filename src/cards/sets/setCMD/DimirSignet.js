"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setARC/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor (game) {
    super(game, "Dimir Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DimirSignet;
