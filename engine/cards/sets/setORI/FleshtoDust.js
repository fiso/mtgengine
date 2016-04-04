"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleshtoDustBase = require("../setM15/FleshtoDust.js");

class FleshtoDust extends FleshtoDustBase {
  constructor(game) {
    super(game, "Flesh to Dust", "Magic Origins", "ORI");
  }
}

module.exports = FleshtoDust;
