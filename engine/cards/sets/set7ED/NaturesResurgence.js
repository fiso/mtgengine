"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturesResurgenceBase = require("../set6ED/NaturesResurgence.js");

class NaturesResurgence extends NaturesResurgenceBase {
  constructor(game) {
    super(game, "Nature's Resurgence", "Seventh Edition", "7ED");
  }
}

module.exports = NaturesResurgence;
