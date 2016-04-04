"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaCache extends Card {
  constructor(game) {
    super(game, "Mana Cache", "Nemesis", "NMS");
  }
}

module.exports = ManaCache;
