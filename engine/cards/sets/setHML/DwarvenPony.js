"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenPony extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Pony", "Homelands", "HML");
  }
}

module.exports = DwarvenPony;
