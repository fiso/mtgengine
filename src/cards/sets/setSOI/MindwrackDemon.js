"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindwrackDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindwrack Demon", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MindwrackDemon;
