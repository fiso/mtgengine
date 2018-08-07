"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Annihilate extends UnimplementedCard {
  constructor (game) {
    super(game, "Annihilate", "Eternal Masters", "EMA");
  }
}

module.exports = Annihilate;
