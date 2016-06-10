"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skinrender extends UnimplementedCard {
  constructor (game) {
    super(game, "Skinrender", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Skinrender;
