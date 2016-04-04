"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarborBandit extends Card {
  constructor(game) {
    super(game, "Harbor Bandit", "Magic 2013", "M13");
  }
}

module.exports = HarborBandit;
