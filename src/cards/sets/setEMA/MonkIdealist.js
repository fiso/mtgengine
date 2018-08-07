"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonkIdealist extends UnimplementedCard {
  constructor (game) {
    super(game, "Monk Idealist", "Eternal Masters", "EMA");
  }
}

module.exports = MonkIdealist;
