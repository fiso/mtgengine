"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BosomBuddy extends UnimplementedCard {
  constructor(game) {
    super(game, "Bosom Buddy", "Unhinged", "UNH");
  }
}

module.exports = BosomBuddy;
