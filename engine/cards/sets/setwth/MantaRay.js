"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MantaRay extends UnimplementedCard {
  constructor(game) {
    super(game, "Manta Ray", "Weatherlight", "WTH");
  }
}

module.exports = MantaRay;
