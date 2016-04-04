"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoxiousGhoul extends Card {
  constructor(game) {
    super(game, "Noxious Ghoul", "Legions", "LGN");
  }
}

module.exports = NoxiousGhoul;
