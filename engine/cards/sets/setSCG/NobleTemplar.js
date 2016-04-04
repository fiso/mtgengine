"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NobleTemplarBase = require("../setDDO/NobleTemplar.js");

class NobleTemplar extends NobleTemplarBase {
  constructor(game) {
    super(game, "Noble Templar", "Scourge", "SCG");
  }
}

module.exports = NobleTemplar;
