"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyInsect extends Card {
  constructor(game) {
    super(game, "Deadly Insect", "Alliances", "ALL");
  }
}

module.exports = DeadlyInsect;
