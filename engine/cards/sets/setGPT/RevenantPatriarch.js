"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevenantPatriarchBase = require("../setDDK/RevenantPatriarch.js");

class RevenantPatriarch extends RevenantPatriarchBase {
  constructor(game) {
    super(game, "Revenant Patriarch", "Guildpact", "GPT");
  }
}

module.exports = RevenantPatriarch;
