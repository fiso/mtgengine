"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromanticSummons extends Card {
  constructor(game) {
    super(game, "Necromantic Summons", "Magic Origins", "ORI");
  }
}

module.exports = NecromanticSummons;
