"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Squire", "Fifth Dawn", "5DN");
  }
}

module.exports = LeoninSquire;
