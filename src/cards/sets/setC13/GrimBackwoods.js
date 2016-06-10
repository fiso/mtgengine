"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimBackwoods extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Backwoods", "Commander 2013 Edition", "C13");
  }
}

module.exports = GrimBackwoods;
