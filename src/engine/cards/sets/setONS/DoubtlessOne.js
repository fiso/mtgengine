"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubtlessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Doubtless One", "Onslaught", "ONS");
  }
}

module.exports = DoubtlessOne;
