"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrizedAmalgam extends Card {
  constructor(game) {
    super(game, "Prized Amalgam", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PrizedAmalgam;
