"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Serenity extends UnimplementedCard {
  constructor (game) {
    super(game, "Serenity", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Serenity;
