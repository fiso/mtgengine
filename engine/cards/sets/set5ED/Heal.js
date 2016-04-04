"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Heal extends Card {
  constructor(game) {
    super(game, "Heal", "Fifth Edition", "5ED");
  }
}

module.exports = Heal;
