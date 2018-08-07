"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorintheWary extends UnimplementedCard {
  constructor (game) {
    super(game, "Norin the Wary", "Time Spiral", "TSP");
  }
}

module.exports = NorintheWary;
