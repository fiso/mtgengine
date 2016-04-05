"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hammerheim extends UnimplementedCard {
  constructor(game) {
    super(game, "Hammerheim", "Legends", "LEG");
  }
}

module.exports = Hammerheim;
