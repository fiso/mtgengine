"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefulStareBase = require("../set9ED/BalefulStare.js");

class BalefulStare extends BalefulStareBase {
  constructor(game) {
    super(game, "Baleful Stare", "Portal", "POR");
  }
}

module.exports = BalefulStare;
