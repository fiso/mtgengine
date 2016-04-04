"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowderKegBase = require("../setpMPR/PowderKeg.js");

class PowderKeg extends PowderKegBase {
  constructor(game) {
    super(game, "Powder Keg", "Urza's Destiny", "UDS");
  }
}

module.exports = PowderKeg;
