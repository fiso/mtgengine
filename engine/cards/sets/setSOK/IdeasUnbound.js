"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IdeasUnbound extends UnimplementedCard {
  constructor(game) {
    super(game, "Ideas Unbound", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = IdeasUnbound;
