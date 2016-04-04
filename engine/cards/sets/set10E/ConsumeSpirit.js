"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConsumeSpiritBase = require("../setDD3_DVD/ConsumeSpirit.js");

class ConsumeSpirit extends ConsumeSpiritBase {
  constructor(game) {
    super(game, "Consume Spirit", "Tenth Edition", "10E");
  }
}

module.exports = ConsumeSpirit;
