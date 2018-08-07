"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceTelepathUnboundEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Telepath Unbound Emblem", "Magic Origins Tokens", "TORI");
  }
}

module.exports = JaceTelepathUnboundEmblem;
