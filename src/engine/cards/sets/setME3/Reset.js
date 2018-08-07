"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reset extends UnimplementedCard {
  constructor (game) {
    super(game, "Reset", "Masters Edition III", "ME3");
  }
}

module.exports = Reset;
