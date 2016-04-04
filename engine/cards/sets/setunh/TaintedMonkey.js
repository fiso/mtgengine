"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedMonkey extends Card {
  constructor(game) {
    super(game, "Tainted Monkey", "Unhinged", "UNH");
  }
}

module.exports = TaintedMonkey;
