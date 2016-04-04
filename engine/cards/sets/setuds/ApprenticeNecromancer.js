"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ApprenticeNecromancer extends Card {
  constructor(game) {
    super(game, "Apprentice Necromancer", "Urza's Destiny", "UDS");
  }
}

module.exports = ApprenticeNecromancer;
