"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarWingSiren extends Card {
  constructor(game) {
    super(game, "War-Wing Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = WarWingSiren;
