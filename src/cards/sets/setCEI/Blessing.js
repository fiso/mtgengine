"use strict";
const Constants = require ("../../../Constants");
const BlessingBase = require("../setCED/Blessing");

class Blessing extends BlessingBase {
  constructor (game) {
    super(game, "Blessing", "International Collector's Edition", "CEI");
  }
}

module.exports = Blessing;
