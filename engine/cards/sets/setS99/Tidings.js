"use strict";
const Constants = require ("../../../Constants");
const TidingsBase = require("../setpMPR/Tidings");

class Tidings extends TidingsBase {
  constructor(game) {
    super(game, "Tidings", "Starter 1999", "S99");
  }
}

module.exports = Tidings;
