"use strict";
const Constants = require ("../../../Constants");
const DevastationTideBase = require("../setC18/DevastationTide");

class DevastationTide extends DevastationTideBase {
  constructor (game) {
    super(game, "Devastation Tide", "Commander 2016", "C16");
  }
}

module.exports = DevastationTide;
