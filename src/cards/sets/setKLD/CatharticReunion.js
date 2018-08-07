"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatharticReunion extends UnimplementedCard {
  constructor (game) {
    super(game, "Cathartic Reunion", "Kaladesh", "KLD");
  }
}

module.exports = CatharticReunion;
