"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brushland extends UnimplementedCard {
  constructor (game) {
    super(game, "Brushland", "Tenth Edition", "10E");
  }
}

module.exports = Brushland;
