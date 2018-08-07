"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Wind", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DeathWind;
