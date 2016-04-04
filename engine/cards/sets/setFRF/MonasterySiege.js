"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonasterySiege extends Card {
  constructor(game) {
    super(game, "Monastery Siege", "Fate Reforged", "FRF");
  }
}

module.exports = MonasterySiege;
