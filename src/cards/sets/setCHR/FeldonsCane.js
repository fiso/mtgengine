"use strict";
const Constants = require ("../../../Constants");
const FeldonsCaneBase = require("../setATQ/FeldonsCane");

class FeldonsCane extends FeldonsCaneBase {
  constructor (game) {
    super(game, "Feldon's Cane", "Chronicles", "CHR");
  }
}

module.exports = FeldonsCane;
