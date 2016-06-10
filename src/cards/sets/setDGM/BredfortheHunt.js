"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BredfortheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Bred for the Hunt", "Dragon's Maze", "DGM");
  }
}

module.exports = BredfortheHunt;
