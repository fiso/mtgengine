"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tetravus extends Card {
  constructor(game) {
    super(game, "Tetravus", "Antiquities", "ATQ");
  }
}

module.exports = Tetravus;
