"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaTithe extends Card {
  constructor(game) {
    super(game, "Mana Tithe", "Magic Player Rewards", "pMPR");
  }
}

module.exports = ManaTithe;
