"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bound extends UnimplementedCard {
  constructor (game) {
    super(game, "Bound", "Dissension", "DIS");
  }
}

module.exports = Bound;
