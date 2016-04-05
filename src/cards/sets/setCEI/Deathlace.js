"use strict";
const Constants = require ("../../../Constants");
const DeathlaceBase = require("../setCED/Deathlace");

class Deathlace extends DeathlaceBase {
  constructor(game) {
    super(game, "Deathlace", "International Collector's Edition", "CEI");
  }
}

module.exports = Deathlace;
