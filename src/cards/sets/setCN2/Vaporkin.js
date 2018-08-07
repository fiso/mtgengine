"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vaporkin extends UnimplementedCard {
  constructor (game) {
    super(game, "Vaporkin", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Vaporkin;
