"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Far extends UnimplementedCard {
  constructor(game) {
    super(game, "Far", "Dragon's Maze", "DGM");
  }
}

module.exports = Far;
