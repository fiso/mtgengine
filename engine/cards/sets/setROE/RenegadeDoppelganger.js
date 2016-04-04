"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeDoppelganger extends UnimplementedCard {
  constructor(game) {
    super(game, "Renegade Doppelganger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RenegadeDoppelganger;
