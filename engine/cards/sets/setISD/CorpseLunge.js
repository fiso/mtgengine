"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseLunge extends Card {
  constructor(game) {
    super(game, "Corpse Lunge", "Innistrad", "ISD");
  }
}

module.exports = CorpseLunge;
