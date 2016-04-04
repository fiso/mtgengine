"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreakwoodGhoul extends Card {
  constructor(game) {
    super(game, "Creakwood Ghoul", "Eventide", "EVE");
  }
}

module.exports = CreakwoodGhoul;
