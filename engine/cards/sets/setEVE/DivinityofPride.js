"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivinityofPrideBase = require("../setC13/DivinityofPride.js");

class DivinityofPride extends DivinityofPrideBase {
  constructor(game) {
    super(game, "Divinity of Pride", "Eventide", "EVE");
  }
}

module.exports = DivinityofPride;
