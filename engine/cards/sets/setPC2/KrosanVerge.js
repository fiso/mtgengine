"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanVergeBase = require("../setARC/KrosanVerge.js");

class KrosanVerge extends KrosanVergeBase {
  constructor(game) {
    super(game, "Krosan Verge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KrosanVerge;
