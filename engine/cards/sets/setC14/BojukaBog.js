"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BojukaBogBase = require("../setC13/BojukaBog.js");

class BojukaBog extends BojukaBogBase {
  constructor(game) {
    super(game, "Bojuka Bog", "Commander 2014", "C14");
  }
}

module.exports = BojukaBog;
