"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindslaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindslaver", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Mindslaver;
