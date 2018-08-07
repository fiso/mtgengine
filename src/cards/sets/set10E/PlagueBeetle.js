"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Beetle", "Tenth Edition", "10E");
  }
}

module.exports = PlagueBeetle;
