"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boompile extends UnimplementedCard {
  constructor (game) {
    super(game, "Boompile", "You Make the Cube", "PZ2");
  }
}

module.exports = Boompile;
