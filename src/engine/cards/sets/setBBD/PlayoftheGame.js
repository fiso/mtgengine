"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlayoftheGame extends UnimplementedCard {
  constructor (game) {
    super(game, "Play of the Game", "Battlebond", "BBD");
  }
}

module.exports = PlayoftheGame;
