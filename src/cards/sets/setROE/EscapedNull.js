"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EscapedNull extends UnimplementedCard {
  constructor (game) {
    super(game, "Escaped Null", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EscapedNull;
