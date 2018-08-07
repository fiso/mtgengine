"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Afflict extends UnimplementedCard {
  constructor (game) {
    super(game, "Afflict", "Tenth Edition", "10E");
  }
}

module.exports = Afflict;
