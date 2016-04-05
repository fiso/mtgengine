"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quagmire extends UnimplementedCard {
  constructor(game) {
    super(game, "Quagmire", "Legends", "LEG");
  }
}

module.exports = Quagmire;
