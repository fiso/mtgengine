"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvoidFate extends UnimplementedCard {
  constructor(game) {
    super(game, "Avoid Fate", "Legends", "LEG");
  }
}

module.exports = AvoidFate;
