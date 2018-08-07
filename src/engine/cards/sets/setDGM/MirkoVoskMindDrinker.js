"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirkoVoskMindDrinker extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirko Vosk, Mind Drinker", "Dragon's Maze", "DGM");
  }
}

module.exports = MirkoVoskMindDrinker;
