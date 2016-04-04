"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonkIdealist extends UnimplementedCard {
  constructor(game) {
    super(game, "Monk Idealist", "Commander 2015", "C15");
  }
}

module.exports = MonkIdealist;
