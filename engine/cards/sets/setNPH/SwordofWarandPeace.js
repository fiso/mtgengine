"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordofWarandPeace extends Card {
  constructor(game) {
    super(game, "Sword of War and Peace", "New Phyrexia", "NPH");
  }
}

module.exports = SwordofWarandPeace;
