"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceTelepathUnbound extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Telepath Unbound", "Magic Origins", "ORI");
  }
}

module.exports = JaceTelepathUnbound;
