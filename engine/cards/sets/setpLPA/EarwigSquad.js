"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarwigSquad extends Card {
  constructor(game) {
    super(game, "Earwig Squad", "Launch Parties", "pLPA");
  }
}

module.exports = EarwigSquad;
