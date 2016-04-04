"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiteofUndoing extends Card {
  constructor(game) {
    super(game, "Rite of Undoing", "Fate Reforged", "FRF");
  }
}

module.exports = RiteofUndoing;
