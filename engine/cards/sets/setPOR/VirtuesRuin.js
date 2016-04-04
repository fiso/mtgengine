"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VirtuesRuinBase = require("../setV14/VirtuesRuin.js");

class VirtuesRuin extends VirtuesRuinBase {
  constructor(game) {
    super(game, "Virtue's Ruin", "Portal", "POR");
  }
}

module.exports = VirtuesRuin;
