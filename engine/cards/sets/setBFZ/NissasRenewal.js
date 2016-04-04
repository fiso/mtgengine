"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NissasRenewal extends Card {
  constructor(game) {
    super(game, "Nissa's Renewal", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NissasRenewal;
