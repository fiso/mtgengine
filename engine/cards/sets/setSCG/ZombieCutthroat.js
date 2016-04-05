"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieCutthroat extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Cutthroat", "Scourge", "SCG");
  }
}

module.exports = ZombieCutthroat;
