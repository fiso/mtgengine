"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VesperGhoul extends Card {
  constructor(game) {
    super(game, "Vesper Ghoul", "Dissension", "DIS");
  }
}

module.exports = VesperGhoul;
