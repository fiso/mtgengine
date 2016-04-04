"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindSludge extends Card {
  constructor(game) {
    super(game, "Mind Sludge", "Eighth Edition", "8ED");
  }
}

module.exports = MindSludge;
