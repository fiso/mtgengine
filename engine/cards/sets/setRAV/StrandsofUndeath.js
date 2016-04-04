"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrandsofUndeath extends Card {
  constructor(game) {
    super(game, "Strands of Undeath", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StrandsofUndeath;
