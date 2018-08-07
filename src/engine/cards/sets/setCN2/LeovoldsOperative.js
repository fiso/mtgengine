"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeovoldsOperative extends UnimplementedCard {
  constructor (game) {
    super(game, "Leovold's Operative", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = LeovoldsOperative;
