"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reinforcements extends Card {
  constructor(game) {
    super(game, "Reinforcements", "Alliances", "ALL");
  }
}

module.exports = Reinforcements;
