"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightfromWithin extends UnimplementedCard {
  constructor (game) {
    super(game, "Light from Within", "Eventide", "EVE");
  }
}

module.exports = LightfromWithin;
