"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorruptBase = require("../setDD3_DVD/Corrupt.js");

class Corrupt extends CorruptBase {
  constructor(game) {
    super(game, "Corrupt", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Corrupt;
