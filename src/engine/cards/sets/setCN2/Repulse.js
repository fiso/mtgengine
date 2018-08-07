"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Repulse", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Repulse;
