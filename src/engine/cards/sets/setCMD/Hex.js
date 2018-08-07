"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hex extends UnimplementedCard {
  constructor (game) {
    super(game, "Hex", "Commander 2011", "CMD");
  }
}

module.exports = Hex;
