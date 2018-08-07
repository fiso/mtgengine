"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThallidSoothsayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thallid Soothsayer", "Dominaria", "DOM");
  }
}

module.exports = ThallidSoothsayer;
