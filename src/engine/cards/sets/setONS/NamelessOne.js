"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NamelessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Nameless One", "Onslaught", "ONS");
  }
}

module.exports = NamelessOne;
