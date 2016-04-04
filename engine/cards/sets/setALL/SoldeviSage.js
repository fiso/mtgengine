"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldeviSage extends Card {
  constructor(game) {
    super(game, "Soldevi Sage", "Alliances", "ALL");
  }
}

module.exports = SoldeviSage;
