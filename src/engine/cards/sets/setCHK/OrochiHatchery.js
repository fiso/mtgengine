"use strict";
const Constants = require ("../../../Constants");
const OrochiHatcheryBase = require("../setC15/OrochiHatchery");

class OrochiHatchery extends OrochiHatcheryBase {
  constructor (game) {
    super(game, "Orochi Hatchery", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrochiHatchery;
