"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatinumEmperion extends UnimplementedCard {
  constructor(game) {
    super(game, "Platinum Emperion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PlatinumEmperion;
