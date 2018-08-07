"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormHerd extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Herd", "Commander 2011", "CMD");
  }
}

module.exports = StormHerd;
