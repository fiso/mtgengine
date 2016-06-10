"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanWarchief extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Warchief", "Commander 2013 Edition", "C13");
  }
}

module.exports = KrosanWarchief;
