"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarHorn extends UnimplementedCard {
  constructor (game) {
    super(game, "War Horn", "Magic Origins", "ORI");
  }
}

module.exports = WarHorn;
