"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Brute", "Legions", "LGN");
  }
}

module.exports = ZombieBrute;
