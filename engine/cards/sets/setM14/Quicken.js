"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuickenBase = require("../setGPT/Quicken.js");

class Quicken extends QuickenBase {
  constructor(game) {
    super(game, "Quicken", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Quicken;
