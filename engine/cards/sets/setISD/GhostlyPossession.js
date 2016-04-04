"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyPossession extends Card {
  constructor(game) {
    super(game, "Ghostly Possession", "Innistrad", "ISD");
  }
}

module.exports = GhostlyPossession;
