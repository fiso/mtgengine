"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazeofGloryBase = require("../setCED/BlazeofGlory.js");

class BlazeofGlory extends BlazeofGloryBase {
  constructor(game) {
    super(game, "Blaze of Glory", "International Collector's Edition", "CEI");
  }
}

module.exports = BlazeofGlory;
