"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinCanyon extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin Canyon", "Visions", "VIS");
  }
}

module.exports = GriffinCanyon;
