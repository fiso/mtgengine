"use strict";
const Constants = require ("../../../Constants");
const ScragnothBase = require("../setpFNM/Scragnoth");

class Scragnoth extends ScragnothBase {
  constructor(game) {
    super(game, "Scragnoth", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Scragnoth;
