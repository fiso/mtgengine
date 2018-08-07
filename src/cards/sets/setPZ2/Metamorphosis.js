"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metamorphosis extends UnimplementedCard {
  constructor (game) {
    super(game, "Metamorphosis", "You Make the Cube", "PZ2");
  }
}

module.exports = Metamorphosis;
