"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterForgeling extends Card {
  constructor(game) {
    super(game, "Greater Forgeling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GreaterForgeling;
