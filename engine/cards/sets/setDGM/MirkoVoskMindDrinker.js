"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirkoVoskMindDrinker extends Card {
  constructor(game) {
    super(game, "Mirko Vosk, Mind Drinker", "Dragon's Maze", "DGM");
  }
}

module.exports = MirkoVoskMindDrinker;
