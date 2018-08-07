"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tetravus extends UnimplementedCard {
  constructor (game) {
    super(game, "Tetravus", "Masters Edition IV", "ME4");
  }
}

module.exports = Tetravus;
