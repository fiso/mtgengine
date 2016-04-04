"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedRemedy extends Card {
  constructor(game) {
    super(game, "Tainted Remedy", "Magic Origins", "ORI");
  }
}

module.exports = TaintedRemedy;
