"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoomedNecromancer extends Card {
  constructor(game) {
    super(game, "Doomed Necromancer", "Onslaught", "ONS");
  }
}

module.exports = DoomedNecromancer;
