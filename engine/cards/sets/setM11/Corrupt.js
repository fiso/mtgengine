"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorruptBase = require("../setDD3_DVD/Corrupt.js");

class Corrupt extends CorruptBase {
  constructor(game) {
    super(game, "Corrupt", "Magic 2011", "M11");
  }
}

module.exports = Corrupt;
