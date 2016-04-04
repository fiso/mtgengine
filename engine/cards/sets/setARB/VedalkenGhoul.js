"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenGhoul extends Card {
  constructor(game) {
    super(game, "Vedalken Ghoul", "Alara Reborn", "ARB");
  }
}

module.exports = VedalkenGhoul;
