"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ætherling extends UnimplementedCard {
  constructor(game) {
    super(game, "Ætherling", "Dragon's Maze", "DGM");
  }
}

module.exports = Ætherling;
