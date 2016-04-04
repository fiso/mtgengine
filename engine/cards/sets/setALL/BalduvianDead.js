"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianDead extends Card {
  constructor(game) {
    super(game, "Balduvian Dead", "Alliances", "ALL");
  }
}

module.exports = BalduvianDead;
