"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoughTumble extends UnimplementedCard {
  constructor (game) {
    super(game, "Rough // Tumble", "Commander 2013", "C13");
  }
}

module.exports = RoughTumble;
