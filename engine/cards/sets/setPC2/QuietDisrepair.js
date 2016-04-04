"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuietDisrepairBase = require("../setFUT/QuietDisrepair.js");

class QuietDisrepair extends QuietDisrepairBase {
  constructor(game) {
    super(game, "Quiet Disrepair", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = QuietDisrepair;
