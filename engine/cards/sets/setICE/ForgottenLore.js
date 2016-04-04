"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgottenLore extends Card {
  constructor(game) {
    super(game, "Forgotten Lore", "Ice Age", "ICE");
  }
}

module.exports = ForgottenLore;
