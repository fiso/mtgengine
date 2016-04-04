"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Foresight extends Card {
  constructor(game) {
    super(game, "Foresight", "Alliances", "ALL");
  }
}

module.exports = Foresight;
