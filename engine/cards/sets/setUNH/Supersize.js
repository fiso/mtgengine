"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Supersize extends UnimplementedCard {
  constructor(game) {
    super(game, "Supersize", "Unhinged", "UNH");
  }
}

module.exports = Supersize;
