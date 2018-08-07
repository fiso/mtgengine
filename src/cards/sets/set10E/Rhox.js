"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rhox extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhox", "Tenth Edition", "10E");
  }
}

module.exports = Rhox;
