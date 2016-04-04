"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesRevoltBase = require("../set7ED/NaturesRevolt.js");

class NaturesRevolt extends NaturesRevoltBase {
  constructor(game) {
    super(game, "Nature's Revolt", "Tempest", "TMP");
  }
}

module.exports = NaturesRevolt;
