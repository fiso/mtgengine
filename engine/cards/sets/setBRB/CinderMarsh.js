"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderMarsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Cinder Marsh", "Battle Royale Box Set", "BRB");
  }
}

module.exports = CinderMarsh;
