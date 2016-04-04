"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnowDevilBase = require("../setCST/SnowDevil.js");

class SnowDevil extends SnowDevilBase {
  constructor(game) {
    super(game, "Snow Devil", "Ice Age", "ICE");
  }
}

module.exports = SnowDevil;
