"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticDenial extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Denial", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MysticDenial;
