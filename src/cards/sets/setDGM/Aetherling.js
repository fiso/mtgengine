"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aetherling extends UnimplementedCard {
  constructor (game) {
    super(game, "Ætherling", "Dragon's Maze", "DGM");
  }
}

module.exports = Aetherling;
