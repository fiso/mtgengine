"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyroblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyroblast", "Eternal Masters", "EMA");
  }
}

module.exports = Pyroblast;
