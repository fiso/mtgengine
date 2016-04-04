"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retaliate extends Card {
  constructor(game) {
    super(game, "Retaliate", "Fifth Dawn", "5DN");
  }
}

module.exports = Retaliate;
