"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overtaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Overtaker", "Magic Online Promos", "PRM");
  }
}

module.exports = Overtaker;
