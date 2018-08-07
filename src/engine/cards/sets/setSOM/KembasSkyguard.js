"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KembasSkyguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kemba's Skyguard", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KembasSkyguard;
