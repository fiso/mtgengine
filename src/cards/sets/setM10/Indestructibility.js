"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Indestructibility extends UnimplementedCard {
  constructor (game) {
    super(game, "Indestructibility", "Magic 2010", "M10");
  }
}

module.exports = Indestructibility;
