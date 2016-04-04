"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakeclawGargantuanBase = require("../setC13/RakeclawGargantuan.js");

class RakeclawGargantuan extends RakeclawGargantuanBase {
  constructor(game) {
    super(game, "Rakeclaw Gargantuan", "Shards of Alara", "ALA");
  }
}

module.exports = RakeclawGargantuan;
