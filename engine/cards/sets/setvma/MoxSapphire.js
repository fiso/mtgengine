"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxSapphireBase = require("../setCED/MoxSapphire.js");

class MoxSapphire extends MoxSapphireBase {
  constructor(game) {
    super(game, "Mox Sapphire", "Vintage Masters", "VMA");
  }
}

module.exports = MoxSapphire;
