"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TopsyTurvy extends UnimplementedCard {
  constructor(game) {
    super(game, "Topsy Turvy", "Unhinged", "UNH");
  }
}

module.exports = TopsyTurvy;
