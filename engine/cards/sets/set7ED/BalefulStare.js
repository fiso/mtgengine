"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefulStareBase = require("../set9ED/BalefulStare.js");

class BalefulStare extends BalefulStareBase {
  constructor(game) {
    super(game, "Baleful Stare", "Seventh Edition", "7ED");
  }
}

module.exports = BalefulStare;
