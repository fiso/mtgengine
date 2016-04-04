"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeaMonsterBase = require("../set6ED/SeaMonster.js");

class SeaMonster extends SeaMonsterBase {
  constructor(game) {
    super(game, "Sea Monster", "Seventh Edition", "7ED");
  }
}

module.exports = SeaMonster;
