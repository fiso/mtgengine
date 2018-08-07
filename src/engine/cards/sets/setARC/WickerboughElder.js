"use strict";
const Constants = require ("../../../Constants");
const WickerboughElderBase = require("../setTD0/WickerboughElder");

class WickerboughElder extends WickerboughElderBase {
  constructor (game) {
    super(game, "Wickerbough Elder", "Archenemy", "ARC");
  }
}

module.exports = WickerboughElder;
