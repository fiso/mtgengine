"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FamishedGhoul extends Card {
  constructor(game) {
    super(game, "Famished Ghoul", "Odyssey", "ODY");
  }
}

module.exports = FamishedGhoul;
