"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NyxWeaver extends Card {
  constructor(game) {
    super(game, "Nyx Weaver", "Journey into Nyx", "JOU");
  }
}

module.exports = NyxWeaver;
