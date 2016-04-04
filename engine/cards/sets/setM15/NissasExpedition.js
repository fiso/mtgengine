"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NissasExpedition extends Card {
  constructor(game) {
    super(game, "Nissa's Expedition", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NissasExpedition;
