"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rouse extends UnimplementedCard {
  constructor (game) {
    super(game, "Rouse", "Mercadian Masques", "MMQ");
  }
}

module.exports = Rouse;
