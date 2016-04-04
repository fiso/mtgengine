"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SharuumtheHegemonBase = require("../setC13/SharuumtheHegemon.js");

class SharuumtheHegemon extends SharuumtheHegemonBase {
  constructor(game) {
    super(game, "Sharuum the Hegemon", "Shards of Alara", "ALA");
  }
}

module.exports = SharuumtheHegemon;
