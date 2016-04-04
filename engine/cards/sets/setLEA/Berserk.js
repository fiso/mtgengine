"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BerserkBase = require("../setCED/Berserk.js");

class Berserk extends BerserkBase {
  constructor(game) {
    super(game, "Berserk", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Berserk;
