"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReverentHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverent Hunter", "Theros", "THS");
  }
}

module.exports = ReverentHunter;
