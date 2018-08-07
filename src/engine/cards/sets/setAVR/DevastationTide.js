"use strict";
const Constants = require ("../../../Constants");
const DevastationTideBase = require("../setC18/DevastationTide");

class DevastationTide extends DevastationTideBase {
  constructor (game) {
    super(game, "Devastation Tide", "Avacyn Restored", "AVR");
  }
}

module.exports = DevastationTide;
