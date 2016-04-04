"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxPearlBase = require("../setCED/MoxPearl.js");

class MoxPearl extends MoxPearlBase {
  constructor(game) {
    super(game, "Mox Pearl", "Vintage Masters", "VMA");
  }
}

module.exports = MoxPearl;
