"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Counterbalance extends Card {
  constructor(game) {
    super(game, "Counterbalance", "Coldsnap", "CSP");
  }
}

module.exports = Counterbalance;
