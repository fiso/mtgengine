"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonWayfarer extends UnimplementedCard {
  constructor (game) {
    super(game, "Loxodon Wayfarer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LoxodonWayfarer;
