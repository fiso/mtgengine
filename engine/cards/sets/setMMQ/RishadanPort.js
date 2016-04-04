"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RishadanPort extends Card {
  constructor(game) {
    super(game, "Rishadan Port", "Mercadian Masques", "MMQ");
  }
}

module.exports = RishadanPort;
