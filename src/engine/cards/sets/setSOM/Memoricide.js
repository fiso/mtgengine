"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Memoricide extends UnimplementedCard {
  constructor (game) {
    super(game, "Memoricide", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Memoricide;
