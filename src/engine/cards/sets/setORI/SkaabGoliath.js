"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkaabGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Skaab Goliath", "Magic Origins", "ORI");
  }
}

module.exports = SkaabGoliath;
