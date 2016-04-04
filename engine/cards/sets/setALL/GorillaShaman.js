"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorillaShaman extends Card {
  constructor(game) {
    super(game, "Gorilla Shaman", "Alliances", "ALL");
  }
}

module.exports = GorillaShaman;
