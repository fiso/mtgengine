"use strict";
const Constants = require ("../../../Constants");
const HillGiantBase = require("../setCED/HillGiant");

class HillGiant extends HillGiantBase {
  constructor (game) {
    super(game, "Hill Giant", "International Collector's Edition", "CEI");
  }
}

module.exports = HillGiant;
