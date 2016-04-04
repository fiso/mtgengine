"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrokenFallBase = require("../setBRB/BrokenFall.js");

class BrokenFall extends BrokenFallBase {
  constructor(game) {
    super(game, "Broken Fall", "Tempest", "TMP");
  }
}

module.exports = BrokenFall;
