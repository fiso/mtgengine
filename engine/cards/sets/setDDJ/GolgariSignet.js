"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariSignetBase = require("../setC15/GolgariSignet.js");

class GolgariSignet extends GolgariSignetBase {
  constructor(game) {
    super(game, "Golgari Signet", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariSignet;
