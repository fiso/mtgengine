"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Foster extends UnimplementedCard {
  constructor (game) {
    super(game, "Foster", "Commander 2013", "C13");
  }
}

module.exports = Foster;
