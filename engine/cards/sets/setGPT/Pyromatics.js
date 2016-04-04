"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyromaticsBase = require("../setDDJ/Pyromatics.js");

class Pyromatics extends PyromaticsBase {
  constructor(game) {
    super(game, "Pyromatics", "Guildpact", "GPT");
  }
}

module.exports = Pyromatics;
