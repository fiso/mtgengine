"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manaplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Manaplasm", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Manaplasm;
