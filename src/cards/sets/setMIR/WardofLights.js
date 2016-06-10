"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardofLights extends UnimplementedCard {
  constructor (game) {
    super(game, "Ward of Lights", "Mirage", "MIR");
  }
}

module.exports = WardofLights;
