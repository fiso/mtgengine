"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountainBandit extends Card {
  constructor(game) {
    super(game, "Mountain Bandit", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MountainBandit;
