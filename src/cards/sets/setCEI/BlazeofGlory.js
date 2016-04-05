"use strict";
const Constants = require ("../../../Constants");
const BlazeofGloryBase = require("../setCED/BlazeofGlory");

class BlazeofGlory extends BlazeofGloryBase {
  constructor(game) {
    super(game, "Blaze of Glory", "International Collector's Edition", "CEI");
  }
}

module.exports = BlazeofGlory;
