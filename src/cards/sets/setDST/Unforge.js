"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unforge extends UnimplementedCard {
  constructor (game) {
    super(game, "Unforge", "Darksteel", "DST");
  }
}

module.exports = Unforge;
