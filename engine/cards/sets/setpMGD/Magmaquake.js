"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaquakeBase = require("../setC14/Magmaquake.js");

class Magmaquake extends MagmaquakeBase {
  constructor(game) {
    super(game, "Magmaquake", "Magic Game Day", "pMGD");
  }
}

module.exports = Magmaquake;
