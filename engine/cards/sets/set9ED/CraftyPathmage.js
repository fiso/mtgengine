"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CraftyPathmage extends Card {
  constructor(game) {
    super(game, "Crafty Pathmage", "Ninth Edition", "9ED");
  }
}

module.exports = CraftyPathmage;
