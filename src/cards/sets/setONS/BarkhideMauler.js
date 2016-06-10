"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarkhideMauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Barkhide Mauler", "Onslaught", "ONS");
  }
}

module.exports = BarkhideMauler;
