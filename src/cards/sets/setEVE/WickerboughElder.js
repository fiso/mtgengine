"use strict";
const Constants = require ("../../../Constants");
const WickerboughElderBase = require("../setTD0/WickerboughElder");

class WickerboughElder extends WickerboughElderBase {
  constructor (game) {
    super(game, "Wickerbough Elder", "Eventide", "EVE");
  }
}

module.exports = WickerboughElder;
