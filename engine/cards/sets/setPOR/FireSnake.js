"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireSnake extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Snake", "Portal", "POR");
  }
}

module.exports = FireSnake;
