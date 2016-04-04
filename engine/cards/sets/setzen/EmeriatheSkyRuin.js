"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmeriatheSkyRuinBase = require("../setC14/EmeriatheSkyRuin.js");

class EmeriatheSkyRuin extends EmeriatheSkyRuinBase {
  constructor(game) {
    super(game, "Emeria, the Sky Ruin", "Zendikar", "ZEN");
  }
}

module.exports = EmeriatheSkyRuin;
