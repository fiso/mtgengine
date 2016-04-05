"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GameofChaos extends UnimplementedCard {
  constructor(game) {
    super(game, "Game of Chaos", "Fifth Edition", "5ED");
  }
}

module.exports = GameofChaos;
