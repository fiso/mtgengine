"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonkRealist extends UnimplementedCard {
  constructor (game) {
    super(game, "Monk Realist", "Commander 2011", "CMD");
  }
}

module.exports = MonkRealist;
