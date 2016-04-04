"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavamancersSkill extends UnimplementedCard {
  constructor(game) {
    super(game, "Lavamancer's Skill", "Onslaught", "ONS");
  }
}

module.exports = LavamancersSkill;
