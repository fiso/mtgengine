"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavamancersSkill extends Card {
  constructor(game) {
    super(game, "Lavamancer's Skill", "Onslaught", "ONS");
  }
}

module.exports = LavamancersSkill;
