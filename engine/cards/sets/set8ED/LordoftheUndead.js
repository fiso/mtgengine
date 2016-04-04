"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordoftheUndead extends Card {
  constructor(game) {
    super(game, "Lord of the Undead", "Eighth Edition", "8ED");
  }
}

module.exports = LordoftheUndead;
