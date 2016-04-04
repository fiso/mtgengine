"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrdruunVeteran extends Card {
  constructor(game) {
    super(game, "Ordruun Veteran", "Gatecrash", "GTC");
  }
}

module.exports = OrdruunVeteran;
