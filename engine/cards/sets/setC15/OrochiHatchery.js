"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrochiHatcheryBase = require("../setCHK/OrochiHatchery.js");

class OrochiHatchery extends OrochiHatcheryBase {
  constructor(game) {
    super(game, "Orochi Hatchery", "Commander 2015", "C15");
  }
}

module.exports = OrochiHatchery;
