"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tetravus extends UnimplementedCard {
  constructor (game) {
    super(game, "Tetravus", "Antiquities", "ATQ");
  }
}

module.exports = Tetravus;
