"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaithlessLootingBase = require("../setC14/FaithlessLooting.js");

class FaithlessLooting extends FaithlessLootingBase {
  constructor(game) {
    super(game, "Faithless Looting", "Media Inserts", "pMEI");
  }
}

module.exports = FaithlessLooting;
