"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phytoburst extends UnimplementedCard {
  constructor(game) {
    super(game, "Phytoburst", "Dragon's Maze", "DGM");
  }
}

module.exports = Phytoburst;
