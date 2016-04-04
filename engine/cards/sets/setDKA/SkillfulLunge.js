"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkillfulLunge extends Card {
  constructor(game) {
    super(game, "Skillful Lunge", "Dark Ascension", "DKA");
  }
}

module.exports = SkillfulLunge;
