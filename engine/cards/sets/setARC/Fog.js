"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fog extends UnimplementedCard {
  constructor(game) {
    super(game, "Fog", "Archenemy", "ARC");
  }
}

module.exports = Fog;
