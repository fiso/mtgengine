"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GenesisBase = require("../setpJGP/Genesis.js");

class Genesis extends GenesisBase {
  constructor(game) {
    super(game, "Genesis", "Vintage Masters", "VMA");
  }
}

module.exports = Genesis;
