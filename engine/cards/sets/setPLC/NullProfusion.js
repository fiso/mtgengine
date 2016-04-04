"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullProfusion extends Card {
  constructor(game) {
    super(game, "Null Profusion", "Planar Chaos", "PLC");
  }
}

module.exports = NullProfusion;
