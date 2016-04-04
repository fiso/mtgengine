"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaquakeBase = require("../setC14/Magmaquake.js");

class Magmaquake extends MagmaquakeBase {
  constructor(game) {
    super(game, "Magmaquake", "Magic 2013", "M13");
  }
}

module.exports = Magmaquake;
