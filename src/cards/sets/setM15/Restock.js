"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Restock extends UnimplementedCard {
  constructor (game) {
    super(game, "Restock", "Magic 2015", "M15");
  }
}

module.exports = Restock;
