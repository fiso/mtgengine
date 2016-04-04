"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OonasBlackguard extends Card {
  constructor(game) {
    super(game, "Oona's Blackguard", "Gateway", "pGTW");
  }
}

module.exports = OonasBlackguard;
