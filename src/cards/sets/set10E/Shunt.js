"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Shunt", "Tenth Edition", "10E");
  }
}

module.exports = Shunt;
