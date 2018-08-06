"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hydroblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydroblast", "Eternal Masters", "EMA");
  }
}

module.exports = Hydroblast;
