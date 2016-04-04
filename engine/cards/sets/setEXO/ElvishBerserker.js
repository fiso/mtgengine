"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishBerserker extends Card {
  constructor(game) {
    super(game, "Elvish Berserker", "Exodus", "EXO");
  }
}

module.exports = ElvishBerserker;
