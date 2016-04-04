"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ornithopter extends Card {
  constructor(game) {
    super(game, "Ornithopter", "Antiquities", "ATQ");
  }
}

module.exports = Ornithopter;
