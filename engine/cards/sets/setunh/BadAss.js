"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BadAss extends Card {
  constructor(game) {
    super(game, "Bad Ass", "Unhinged", "UNH");
  }
}

module.exports = BadAss;
