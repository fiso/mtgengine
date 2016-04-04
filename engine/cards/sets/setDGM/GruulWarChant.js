"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulWarChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruul War Chant", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulWarChant;
