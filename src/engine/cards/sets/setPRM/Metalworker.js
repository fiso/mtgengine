"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metalworker extends UnimplementedCard {
  constructor (game) {
    super(game, "Metalworker", "Magic Online Promos", "PRM");
  }
}

module.exports = Metalworker;
