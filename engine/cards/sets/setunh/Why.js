"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Why extends UnimplementedCard {
  constructor(game) {
    super(game, "Why", "Unhinged", "UNH");
  }
}

module.exports = Why;
