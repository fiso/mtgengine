"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatrolHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Patrol Hound", "Odyssey", "ODY");
  }
}

module.exports = PatrolHound;
