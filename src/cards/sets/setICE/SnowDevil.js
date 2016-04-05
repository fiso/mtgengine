"use strict";
const Constants = require ("../../../Constants");
const SnowDevilBase = require("../setCST/SnowDevil");

class SnowDevil extends SnowDevilBase {
  constructor(game) {
    super(game, "Snow Devil", "Ice Age", "ICE");
  }
}

module.exports = SnowDevil;
