"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbunaAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Abuna Acolyte", "Scars of Mirrodin", "SOM");
  }
}

module.exports = AbunaAcolyte;
