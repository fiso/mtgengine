"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brainbite extends Card {
  constructor(game) {
    super(game, "Brainbite", "Alara Reborn", "ARB");
  }
}

module.exports = Brainbite;
