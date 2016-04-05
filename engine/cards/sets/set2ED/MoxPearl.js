"use strict";
const Constants = require ("../../../Constants");
const MoxPearlBase = require("../setCED/MoxPearl");

class MoxPearl extends MoxPearlBase {
  constructor(game) {
    super(game, "Mox Pearl", "Unlimited Edition", "2ED");
  }
}

module.exports = MoxPearl;
