"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArenaAthlete extends UnimplementedCard {
  constructor(game) {
    super(game, "Arena Athlete", "Theros", "THS");
  }
}

module.exports = ArenaAthlete;
