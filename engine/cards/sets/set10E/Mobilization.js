"use strict";
const Constants = require ("../../../Constants");
const MobilizationBase = require("../setC14/Mobilization");

class Mobilization extends MobilizationBase {
  constructor(game) {
    super(game, "Mobilization", "Tenth Edition", "10E");
  }
}

module.exports = Mobilization;
