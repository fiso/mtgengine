"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasWarrior extends Card {
  constructor(game) {
    super(game, "Talas Warrior", "Portal Second Age", "PO2");
  }
}

module.exports = TalasWarrior;
