"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CunningBandit extends Card {
  constructor(game) {
    super(game, "Cunning Bandit", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CunningBandit;
