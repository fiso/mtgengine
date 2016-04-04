"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Proposal extends Card {
  constructor(game) {
    super(game, "Proposal", "Celebration", "pCEL");
  }
}

module.exports = Proposal;
