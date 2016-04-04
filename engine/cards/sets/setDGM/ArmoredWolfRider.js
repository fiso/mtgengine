"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredWolfRider extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Wolf-Rider", "Dragon's Maze", "DGM");
  }
}

module.exports = ArmoredWolfRider;
