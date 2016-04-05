"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeofHeroes extends UnimplementedCard {
  constructor(game) {
    super(game, "Time of Heroes", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TimeofHeroes;
