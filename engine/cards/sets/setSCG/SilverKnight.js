"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverKnightBase = require("../setDDG/SilverKnight.js");

class SilverKnight extends SilverKnightBase {
  constructor(game) {
    super(game, "Silver Knight", "Scourge", "SCG");
  }
}

module.exports = SilverKnight;
