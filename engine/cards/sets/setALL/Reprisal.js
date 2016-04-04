"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reprisal extends Card {
  constructor(game) {
    super(game, "Reprisal", "Alliances", "ALL");
  }
}

module.exports = Reprisal;
