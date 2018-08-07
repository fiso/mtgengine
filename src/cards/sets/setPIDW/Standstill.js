"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Standstill extends UnimplementedCard {
  constructor (game) {
    super(game, "Standstill", "IDW Comics 2012", "PIDW");
  }
}

module.exports = Standstill;
