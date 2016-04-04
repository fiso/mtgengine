"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanVergeBase = require("../setARC/KrosanVerge.js");

class KrosanVerge extends KrosanVergeBase {
  constructor(game) {
    super(game, "Krosan Verge", "Judgment", "JUD");
  }
}

module.exports = KrosanVerge;
