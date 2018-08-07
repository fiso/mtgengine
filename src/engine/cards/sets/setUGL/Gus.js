"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gus extends UnimplementedCard {
  constructor (game) {
    super(game, "Gus", "Unglued", "UGL");
  }
}

module.exports = Gus;
