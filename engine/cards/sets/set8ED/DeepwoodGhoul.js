"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepwoodGhoul extends Card {
  constructor(game) {
    super(game, "Deepwood Ghoul", "Eighth Edition", "8ED");
  }
}

module.exports = DeepwoodGhoul;
