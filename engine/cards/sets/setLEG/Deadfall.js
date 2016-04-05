"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deadfall extends UnimplementedCard {
  constructor(game) {
    super(game, "Deadfall", "Legends", "LEG");
  }
}

module.exports = Deadfall;
