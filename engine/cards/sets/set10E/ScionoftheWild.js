"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScionoftheWildBase = require("../setMM2/ScionoftheWild.js");

class ScionoftheWild extends ScionoftheWildBase {
  constructor(game) {
    super(game, "Scion of the Wild", "Tenth Edition", "10E");
  }
}

module.exports = ScionoftheWild;
