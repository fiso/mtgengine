"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindBomb extends Card {
  constructor(game) {
    super(game, "Mind Bomb", "Fifth Edition", "5ED");
  }
}

module.exports = MindBomb;
