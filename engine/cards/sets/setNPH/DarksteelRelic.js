"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelRelic extends Card {
  constructor(game) {
    super(game, "Darksteel Relic", "New Phyrexia", "NPH");
  }
}

module.exports = DarksteelRelic;
