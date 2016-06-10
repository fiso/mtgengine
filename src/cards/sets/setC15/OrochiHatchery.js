"use strict";
const Constants = require ("../../../Constants");
const OrochiHatcheryBase = require("../setCHK/OrochiHatchery");

class OrochiHatchery extends OrochiHatcheryBase {
  constructor (game) {
    super(game, "Orochi Hatchery", "Commander 2015", "C15");
  }
}

module.exports = OrochiHatchery;
