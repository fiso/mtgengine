"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadSlayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Undead Slayer", "Magic 2010", "M10");
  }
}

module.exports = UndeadSlayer;
