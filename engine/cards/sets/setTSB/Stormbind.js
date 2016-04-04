"use strict";
const Constants = require ("../../../Constants");
const StormbindBase = require("../setICE/Stormbind");

class Stormbind extends StormbindBase {
  constructor(game) {
    super(game, "Stormbind", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Stormbind;
