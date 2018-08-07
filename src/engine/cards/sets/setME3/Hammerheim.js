"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hammerheim extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerheim", "Masters Edition III", "ME3");
  }
}

module.exports = Hammerheim;
