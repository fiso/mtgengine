"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldeviDigger extends Card {
  constructor(game) {
    super(game, "Soldevi Digger", "Alliances", "ALL");
  }
}

module.exports = SoldeviDigger;
