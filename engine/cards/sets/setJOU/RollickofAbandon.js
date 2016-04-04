"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RollickofAbandon extends Card {
  constructor(game) {
    super(game, "Rollick of Abandon", "Journey into Nyx", "JOU");
  }
}

module.exports = RollickofAbandon;
