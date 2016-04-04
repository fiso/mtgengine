"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindwrackLiege extends Card {
  constructor(game) {
    super(game, "Mindwrack Liege", "Eventide", "EVE");
  }
}

module.exports = MindwrackLiege;
