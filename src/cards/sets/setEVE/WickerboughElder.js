"use strict";
const Constants = require ("../../../Constants");
const WickerboughElderBase = require("../setARC/WickerboughElder");

class WickerboughElder extends WickerboughElderBase {
  constructor (game) {
    super(game, "Wickerbough Elder", "Eventide", "EVE");
  }
}

module.exports = WickerboughElder;
