"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullBrooch extends Card {
  constructor(game) {
    super(game, "Null Brooch", "Exodus", "EXO");
  }
}

module.exports = NullBrooch;
