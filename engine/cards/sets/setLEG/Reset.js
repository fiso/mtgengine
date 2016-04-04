"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reset extends UnimplementedCard {
  constructor(game) {
    super(game, "Reset", "Legends", "LEG");
  }
}

module.exports = Reset;
