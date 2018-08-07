"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Engineer", "Core Set 2019", "M19");
  }
}

module.exports = AerialEngineer;
