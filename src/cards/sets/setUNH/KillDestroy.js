"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillDestroy extends UnimplementedCard {
  constructor(game) {
    super(game, "Kill! Destroy!", "Unhinged", "UNH");
  }
}

module.exports = KillDestroy;
