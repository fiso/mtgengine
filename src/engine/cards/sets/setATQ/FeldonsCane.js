"use strict";
const Constants = require ("../../../Constants");
const FeldonsCaneBase = require("../setTSB/FeldonsCane");

class FeldonsCane extends FeldonsCaneBase {
  constructor (game) {
    super(game, "Feldon's Cane", "Antiquities", "ATQ");
  }
}

module.exports = FeldonsCane;
