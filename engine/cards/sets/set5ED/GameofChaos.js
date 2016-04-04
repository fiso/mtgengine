"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GameofChaos extends Card {
  constructor(game) {
    super(game, "Game of Chaos", "Fifth Edition", "5ED");
  }
}

module.exports = GameofChaos;
