"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzebeakMoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronzebeak Moa", "Dragon's Maze", "DGM");
  }
}

module.exports = BronzebeakMoa;
